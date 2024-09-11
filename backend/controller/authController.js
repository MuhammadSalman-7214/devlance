import User from '../model/authModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleSignIn = async (req, res) => {
    const { token } = req.body;
  
    try {
      // Verify the token
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
  
      const { sub: googleId, email, given_name: firstName, family_name: lastName } = payload;
  
      // Check if user already exists
      let user = await User.findOne({ email });
      if (!user) {
        // If user doesn't exist, create a new user with a default role
        user = await User.create({
          firstName,
          lastName,
          email,
          googleId, // Store Google ID
          password: '', // No password for Google login users
          country: '', // Optional: Set default country if needed
          role: 'client', // Set default role, can be changed as needed
          provider: 'google',
        });
      }
  
      // Generate JWT token
      const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8h' });
  
      res.status(200).json({ token: jwtToken, user });
    } catch (error) {
      res.status(500).json({ message: 'Google authentication failed' });
    }
  };

  export const signUp = async (req, res) => {
    try {
        console.log('Sign-Up Request:', req.body);

        const { firstName, lastName, email, password, country, role } = req.body;

        if (!firstName || !lastName || !email || !password || !country || !role) {
            return res.status(400).json({ message: 'All fields are required, including role' });
        }

        let existingUser;
        try {
            existingUser = await User.findOne({ email });
        } catch (err) {
            console.error('Error finding user:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 12);
        } catch (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        let newUser;
        try {
            newUser = await User.create({ 
                firstName, 
                lastName, 
                email, 
                password: hashedPassword, 
                country, 
                role
            });
        } catch (err) {
            console.error('Error creating user:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        let token;
        try {
            token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '8h' });
        } catch (err) {
            console.error('Error signing JWT:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        res.status(201).json({ token, user: newUser });
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.status(500).json({ message: 'Sign-up failed. Please try again.' });
    }
};


export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8h' });

        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

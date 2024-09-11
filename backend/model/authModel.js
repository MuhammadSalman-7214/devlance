import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: function() { return this.provider === 'local'; } }, // Password required for local, not Google sign-ins
    country: { type: String, required: true },
    role: { 
        type: String, 
        enum: ['client', 'freelancer'], 
        required: true, 
        default: 'client' 
    },
    googleId: { type: String }, // Store Google ID for Google sign-ins
    provider: { type: String, default: 'local' }, // 'local' for normal signups, 'google' for Google signups
}, { timestamps: true });

const User = mongoose.model('UserLogin', userSchema);

export default User;
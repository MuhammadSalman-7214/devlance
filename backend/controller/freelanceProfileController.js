import FreelanceProfile from '../model/freelanceProfileModel.js';

// Create a new freelance profile
export const createProfile = async (req, res) => {
    const { userId, dateOfBirth, phoneNumber, country, city, state, zipCode, streetAddress, category, subCategory, skills, languages, hourlyRate, skillsTitle, aboutMe, education, experience } = req.body;

    try {
        // Ensure no duplicate profile for the same user
        const existingProfile = await FreelanceProfile.findOne({ userId });
        if (existingProfile) {
            return res.status(400).json({ message: 'Profile for this user already exists' });
        }

        const profile = new FreelanceProfile({
            userId,
            dateOfBirth,
            phoneNumber,
            country,
            city,
            state,
            zipCode,
            streetAddress,
            category,
            subCategory,
            skills,
            languages,
            hourlyRate,
            skillsTitle,
            aboutMe,
            education,
            experience
        });

        await profile.save();
        res.status(201).json({ message: 'Profile created successfully', profile });
    } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ message: 'Failed to create profile' });
    }
};

// Get profile by user ID
export const getProfileByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const profile = await FreelanceProfile.findOne({ userId });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Failed to fetch profile' });
    }
};

// Get all profiles
export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await FreelanceProfile.find();
        res.status(200).json(profiles);
    } catch (error) {
        console.error('Error fetching profiles:', error);
        res.status(500).json({ message: 'Failed to fetch profiles' });
    }
};

// Update a profile by user ID
export const updateProfileByUserId = async (req, res) => {
    const { userId } = req.params;
    const updates = req.body;

    try {
        const updatedProfile = await FreelanceProfile.findOneAndUpdate({ userId }, updates, { new: true });
        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully', profile: updatedProfile });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Failed to update profile' });
    }
};

// Delete a profile by user ID
export const deleteProfileByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        const profile = await FreelanceProfile.findOneAndDelete({ userId });
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        console.error('Error deleting profile:', error);
        res.status(500).json({ message: 'Failed to delete profile' });
    }
};

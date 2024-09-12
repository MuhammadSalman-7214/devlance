import express from 'express';
import { createProfile, getProfileByUserId, getAllProfiles, updateProfileByUserId, deleteProfileByUserId } from '../controller/freelanceProfileController.js';

const FreelanceProfileRouter = express.Router();

// Create a new profile
FreelanceProfileRouter.post('/profile', createProfile);
FreelanceProfileRouter.get('/profiles/:userId', getProfileByUserId);
FreelanceProfileRouter.get('/profiles', getAllProfiles);
FreelanceProfileRouter.put('/profiles/:userId', updateProfileByUserId);
FreelanceProfileRouter.delete('/profiles/:userId', deleteProfileByUserId);

export default FreelanceProfileRouter;

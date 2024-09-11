import express from 'express';
import { signUp, signIn, googleSignIn } from '../controller/authController.js';
import authenticateUser, { authorizeRoles } from '../middleware/authenticateUser.js';

const authRouter = express.Router();

authRouter.get('/client-route', authenticateUser, authorizeRoles('client'), (req, res) => {
  res.send('Access granted to client');
});

authRouter.get('/freelancer-route', authenticateUser, authorizeRoles('freelance'), (req, res) => {
  res.send('Access granted to freelancer');
});

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);
authRouter.post('/google-signin', googleSignIn);

export default authRouter;

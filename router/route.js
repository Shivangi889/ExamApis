import { Router } from "express";
const router = Router();

// import all controller 
import * as controller from '../controllers/appController.js';

import Auth,{authenticateJWT ,  localVariables } from '../middleware/auth.js';
// POST Methods
router.route('/register').post(controller.register);// register user
//router.route('/registerMail').post(); // send the email
router.route('/authenticate').post((req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser, controller.login); // login in app

// GET Methods

router.route('/generatepasswordOTP').get(controller.verifyUser, localVariables, controller.generatepasswordOTP); // generate random OTP
router.route('/verifyOTP').post(controller.verifyOTP); // verify generated OTP
// router.route('/createResetSession').get(controller.createResetSession); // reset all the variables
router.route('/getalluser').get(controller.getAllUsers); // Route to get all users
// PUT Methods

router.route('/resetPassword').put(controller.resetPassword); // use to reset password
router.route('/updatepassword').put(controller.updatePassword);

router.route('/update-profile').post(authenticateJWT, controller.updateProfile,controller.upload.single('image'));




export default router;
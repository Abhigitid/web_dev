import express from "express";
import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
  updateProfilePicture,
  forgetPassword,
  resetPassword,
  addToPlaylist,
  removeFromPlaylist,
  getAllUsers,
  updateUserRole,
  deleteUser,
  deleteMyProfile,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/Auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//To register a new user
router.route("/register").post(singleUpload, register);

//login
router.route("/login").post(login);

//Logout
router.route("/logout").get(logout);

//Get My Profile
router.route("/me").get(isAuthenticated, getMyProfile);

//Delete My Profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

//Change Password
router.route("/changePassword").put(isAuthenticated, changePassword);

//Update Profile
router.route("/updateProfile").put(isAuthenticated, updateProfile);

//Update Profile Picture
router
  .route("/updateProfilePicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

//Forget Password
router.route("/forgetPassword").post(forgetPassword);

//Reset Password
router.route("/resetPassword/:token").put(resetPassword);

//Add to playlist
router.route("/addToPlaylist").post(isAuthenticated, addToPlaylist);

//Remove from playlist
router.route("/removeFromPlaylist").delete(isAuthenticated, removeFromPlaylist);

//Admin Routes
//Get All Users
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

//Update user Role
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);
export default router;

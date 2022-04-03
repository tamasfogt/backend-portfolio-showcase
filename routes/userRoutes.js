const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/sign-up", authController.signup);
router.post("/sign-in", authController.login);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

//TODO ezt is átalakítani normálisra.. valahogy biztos lehet csoportosítani ezeket..
// Protect all routes after this middleware
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.updateMe
);
router.delete("/deleteMe", userController.deleteMe);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;

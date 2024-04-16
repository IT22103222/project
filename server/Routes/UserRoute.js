const Router = require("express").Router;
const router = Router();

const UserCtrl = require("../Controllers/UserController");

//login
router.post("/auth", UserCtrl.Login);

//register & all users
router.route("/").post(UserCtrl.Register);

module.exports = router;

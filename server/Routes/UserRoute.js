const Router = require("express").Router;
const router = Router();

const UserCtrl = require("../Controllers/UserController");

//login
router.post("/auth", UserCtrl.Login);

//register & all users
router.route("/").post(UserCtrl.Register);

//wishlist
router
  .route("/wishlist/:_id")
  .post(UserCtrl.addToWishlist)
  .put(UserCtrl.removeFromWishlist);

//cart
router.route("/cart/:_id").post(UserCtrl.addToCart);

//single user
router.route("/:_id").get(UserCtrl.GetUser);

module.exports = router;

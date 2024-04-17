const Router = require("express").Router;
const router = Router();

const productCtrl = require("../Controllers/productController");

//add product
router.route("/").post(productCtrl.addProduct).get(productCtrl.getProducts);

module.exports = router;

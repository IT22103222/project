const Router = require("express").Router;
const router = Router();

const orderCtrl = require("../Controllers/OrderController");

//add product
router.route("/").post(orderCtrl.addOrder).get(orderCtrl.getOrders);

router
  .route("/:_id")
  .get(orderCtrl.getOrder)
  .delete(orderCtrl.deleteOrder)
  .put(orderCtrl.updateOrder);

module.exports = router;

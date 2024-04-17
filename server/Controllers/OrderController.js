const OrderModel = require("../Models/OrderModel");

//create order
exports.addOrder = (req, res) => {
  let { customer, products, totalPrice } = req.body;

  const newOrder = new OrderModel({
    customer,
    products,
    totalPrice,
  });

  newOrder
    .save()
    .then((res1) => {
      if (res1) {
        res.status(200).json({ ack: true });
      } else {
        res.status(400).json({ ack: false });
      }
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//get order
exports.getOrder = (req, res) => {
  const { _id } = req.params;

  OrderModel.find({ customer: _id })
    .then((res1) => {
      res.status(200).json({ ...res1 });
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//get orders
exports.getOrders = (req, res) => {
  const { _id } = req.params;

  OrderModel.find({})
    .populate({
      path: "customer",
      select: "name",
    })
    .then((res1) => {
      res.status(200).json([...res1]);
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//delete order
exports.deleteOrder = (req, res) => {
  const { _id } = req.params;

  OrderModel.findByIdAndDelete({ _id })
    .then((res1) => {
      if (res1) {
        res.status(200).json({ ack: true });
      } else {
        res.status(400).json({ ack: false });
      }
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//update order status
exports.updateOrder = (req, res) => {
  const { _id } = req.params;
  let { status } = req.body;

  //TODO

  OrderModel.findByIdAndUpdate({ _id }, { status: status })
    .then((res1) => {
      if (res1) {
        res.status(200).json({ ack: true });
      } else {
        res.status(400).json({ ack: false });
      }
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

const ProductModel = require("../Models/ProductModel");

//add product
exports.addProduct = (req, res) => {
  let { name, description, price, image, offer, isAvailable } = req.body;

  const newProd = new ProductModel({
    name,
    description,
    price,
    image,
    offer,
    isAvailable,
  });

  newProd
    .save()
    .then((res1) => {
      return res.status(200).json({});
    })
    .catch((er) => {
      return res.status(400).json({});
    });
};

//get all product
exports.getProducts = (req, res) => {
  ProductModel.find().then((res1) => {
    res.status(200).json([ ...res1 ]);
  });
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");

//user register
exports.Register = (req, res) => {
  //incomming data
  let { name, email, mobile_number, password, role, NIC, gender } = req.body;

  //encrypt
  bcrypt.hash(password, 12, (err, hash) => {
    password = hash;

    const newUser = new UserModel({
      name,
      email,
      mobile_number,
      password,
      gender,
    });

    newUser
      .save()
      .then((data) => {
        if (data._id) {
          //generate token
          const token = jwt.sign(
            { userID: data._id, email: data.email },
            "rpmtvalidation",
            { expiresIn: "2h" }
          );
          return res
            .status(200)
            .json({ added: true, token, role: data.role, _id: data._id });
        } else {
          return res.status(404).json({ added: false });
        }
      })
      .catch((er) => {
        return res.status(404).json({ added: false });
      });
  });
};

//user login
exports.Login = (req, res) => {
  //incomming data
  const { email, password } = req.body;

  UserModel.findOne({ email }, { email: 1, password: 1 })
    .then((data) => {
      //compare password
      if (data._id) {
        const result = bcrypt.compareSync(password, data.password);

        if (result) {
          //generate token
          const token = jwt.sign(
            { userID: data._id, email: data.email },
            "rpmtvalidation",
            { expiresIn: "2h" }
          );

          return res
            .status(200)
            .json({ auth: true, token, role: data.role, _id: data._id });
        }
      } else {
        return res.status(404).json({ auth: false });
      }
    })
    .catch((er) => {
      return res.status(404).json({ auth: false });
    });
};

//add to wishlist
exports.addToWishlist = (req, res) => {
  let { productID } = req.body;
  const { _id } = req.params;

  UserModel.findByIdAndUpdate({ _id }, { $addToSet: { wishList: productID } })
    .then((res1) => {
      res.status(200).json({ ack: true });
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//remove from wishlist
exports.removeFromWishlist = (req, res) => {
  let { productID } = req.body;
  const { _id } = req.params;

  UserModel.findByIdAndUpdate({ _id }, { $pull: { wishList: productID } })
    .then((res1) => {
      res.status(200).json({ ack: true });
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//get wishlist
exports.getWishlist = (req, res) => {
  const { _id } = req.params;

  UserModel.findById({ _id })
    .populate({
      path: "wishList",
      select: "name description price image offer isAvailable offer",
    })
    .then((res1) => {
      res.status(200).json([...res1.wishList]);
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//add to cart
exports.addToCart = (req, res) => {
  let { productID, quantity } = req.body;
  const { _id } = req.params;

  UserModel.findByIdAndUpdate(
    { _id },
    { $addToSet: { cart: { productID, quantity } } }
  )
    .then((res1) => {
      res.status(200).json({ ack: true });
    })
    .catch((er) => {
      res.status(400).json({ msg: er });
    });
};

//get single user data
exports.GetUser = (req, res) => {
  const { _id } = req.params;

  UserModel.findById({ _id }, { password: 0 })
    .then((data) => {
      return res.status(200).json(data._doc);
    })
    .catch((er) => {
      return res.status(404).json({ fetched: false });
    });
};

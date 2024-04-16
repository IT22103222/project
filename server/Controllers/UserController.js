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

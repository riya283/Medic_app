const db = require("../model");
const Admin = db.admins;
const Op = db.Sequelize.Op;
const crypto = require("crypto");
const { admins } = require("../model");

exports.create = (req, res) => {
    if(!req.body.email) {
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    }

    const admins = {
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName
    };
    
    Admin.create(admins).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while creating the Admin."
        });
    });
};

exports.findAdmin = (req, res) => {
    const email = req.body.email;
  //  const authentication_token = req.header.authentication_token;
    const password = req.body.password;
  
    const generateAuthToken = () => {
      return crypto.randomBytes(30).toString("hex");
    };
  
    const authToken = generateAuthToken();
  
    // const user = user_new.findOne(u => {
    //   return u.email === email && u.password_digest === password_digest;
    // })
  
  
    Admin.findOne({ where: {email: email, password: password} }).then((admins) => {
      if(admins) {
        admins.update({
              authentication_token: authToken
          }).then((updatedAdmin) => {
              res.cookie('AuthToken', authToken);
              res.status(200).send(updatedAdmin);
          })
          .catch((err) => {
              res.status(500).send({
                  message: "error occured while updating authentication_token",
            });
          });
        } else {
          res.status(401).send({
            error: "Invalid Username or Password"
          });
        }
    });
};

// find protected admin (adminDeshboard);
exports.findProtectedAdmin = (req,res) => {
   
  const authentication_token = req.headers.authentication_token;
  console.log("auth:",authentication_token);
  admins.findOne({ where: {authentication_token: authentication_token} }).then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "some error occured while retriving admin."
      });
  });
};

  
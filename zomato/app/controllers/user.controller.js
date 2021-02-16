
const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt=require('bcrypt');
// Create and Save a new User
const salt = bcrypt.genSaltSync(10);

exports.createUser = (req, res) => {
   // Validate request
   console.log(req.body)
   if (!req.body.firstname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
   let hash = bcrypt.hashSync(req.body.password,salt);
    const user = {
    Uname: req.body.firstname,
    EmailId: req.body.email,
    Password: hash,
    };
    console.log(user)
  // Save User in the database
  Users.create(user)
    .then(data => {
      console.log(data);
      res.send(data);
    })

};

exports.f=async (req,res)=>{
   const email=req.body.email.email;
   console.log(email);
   const password=req.body.password.password;
   console.log(password);
  await Users.findOne({ where:{EmailId:email}}).then(data=>{
    console.log(data.Password);   
    bcrypt.compare(password, data.Password, function(err, result) {
        if (result) {
            result == true;
            console.log(result);
            res.send(data);       
        }
        else{
            console.log("password dont match");
            console.log(result);
        }
          });
      
}
).catch(err =>{
    if(err)
    {
        console.log(err);
    }
})
}



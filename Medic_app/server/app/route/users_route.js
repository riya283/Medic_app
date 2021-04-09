module.exports = app => {
    const users = require("../controller/users_controller.js");

    var router = require("express").Router();

    router.post("/userRegistration", users.create);

    router.post("/userLogin", users.findUser);

    router.get("/userPersonalDetail", users.findProtectedUser);

   //router.get("/userPersonalMedicOpDetail", users.findProtectedUserMedicDetail);
 
    app.use('/api',router);
}
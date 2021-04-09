module.exports = app => {
    const admins = require("../controller/admin_controller");

    var router = require("express").Router();

    router.post("/adminRegistration", admins.create);

    router.post("/adminLogin", admins.findAdmin);

    router.get("/adminDeshboard", admins.findProtectedAdmin);
    

    app.use('/api',router);
}
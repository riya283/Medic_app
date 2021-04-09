module.exports = app => {
    const medic_op = require("../controller/medic_op_controller.js");

    var router = require("express").Router();

    router.post("/userMedicOpRegistration", medic_op.createMedicOp);

    // router.post("/userLogin", users.findUser);
    router.get("/userMedicOpDetail", medic_op.userMedicOpDetail);

    router.get("/protectedUserMedicOpDetail", medic_op.protectedUserMedicOpDetail);
 
    app.use('/api',router);
}
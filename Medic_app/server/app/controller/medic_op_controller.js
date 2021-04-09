const db = require("../model");
const Medic_op = db.medic_op;
const Op = db.Sequelize.Op;
const crypto = require("crypto");
const { medic_op } = require("../model");

exports.createMedicOp = (req, res) => {
    if(!req.body.patientName) {
        res.status(400).send({
            message:"Content can not be empty!"
        });
        return;
    }

    console.log(req.body.patientName);
    const medic_op = {
        patientName: req.body.patientName,
        hospitalName: req.body.hospitalName,
        consultantName: req.body.consultantName,
        anesthesiaType: req.body.anesthesiaType,
        charge: req.body.charge,
        date: req.body.data,
        status: req.body.status,
        paymentDate: req.body.paymentDate,
        remark: req.body.remark,
        paymentDetail: req.body.paymentDetail,
        paymentMode: req.body.paymentMode,
        paymentReceived: req.body.paymentReceived,
        userId: req.body.userId,
        email: req.body.email
    };
    
    Medic_op.create(medic_op).then(data => {
        res.send(data);
        console.log(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while creating the Medical operation."
        });
    });
};

// find all medical operation detail
exports.userMedicOpDetail = (req, res) => {
    
    const userId = req.body.userId;
    var condition = userId ? { userId: { [Op.like]: `%${userId}` } }: null;

    Medic_op.findAll({where : condition}).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while retriving medical operation detail."
        });
    });
};

exports.protectedUserMedicOpDetail = (req, res) => {

    const email = req.headers.email;
    console.log("email:",email);
    medic_op.findOne({ where: {email: email} }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occured while retriving users."
        });
    });

};


module.exports = (sequelize, Sequelize) => {
    const Medic_op = sequelize.define("medic_op", {
        patientName: {
            type: Sequelize.STRING
        },
        hospitalName: {
            type: Sequelize.STRING
        },
        consultantName: {
            type: Sequelize.STRING
        },
        anesthesiaType: {
            type: Sequelize.STRING
        },
        charge: {
            type: Sequelize.DECIMAL
        },
        date: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        paymentDate: {
            type: Sequelize.STRING
        },
        remark: {
            type: Sequelize.STRING
        },
        paymentDetail: {
            type: Sequelize.STRING
        },
        paymentMode: {
            type: Sequelize.INTEGER
        },
        paymentRecevied: {
            type: Sequelize.BOOLEAN
        },
        userId: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return Medic_op;
};


// const { Seqelize } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        middleName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        authentication_token: {
            type: Sequelize.STRING
        }

    });

    return Users;
};
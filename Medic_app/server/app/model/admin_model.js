module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
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

    return Admin;
};
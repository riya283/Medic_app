'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medic_ops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      paymentDate: {
        type: Sequelize.DATE
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('medic_ops');
  }
};
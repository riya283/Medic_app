'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medic_op extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medic_op.init({
    patientName: DataTypes.STRING,
    hospitalName: DataTypes.STRING,
    consultantName: DataTypes.STRING,
    anesthesiaType: DataTypes.STRING,
    charge: DataTypes.DECIMAL,
    date: DataTypes.DATE,
    status: DataTypes.INTEGER,
    paymentDate: DataTypes.DATE,
    remark: DataTypes.STRING,
    paymentDetail: DataTypes.STRING,
    paymentMode: DataTypes.INTEGER,
    paymentRecevied: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medic_op',
  });
  return medic_op;
};
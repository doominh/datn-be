'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Bill extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Bill.belongsTo(models.Employee, {foreignKey: 'employee_id'});
            Bill.belongsTo(models.Patient, {foreignKey: 'patient_id'});
            Bill.belongsTo(models.Method, {foreignKey: 'method_id'});
            Bill.belongsToMany(models.Service, {through: models.BillService, foreignKey: 'bill_id'});
        }
    }
    Bill.init({
        bill_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        patient_id: DataTypes.STRING(10),
        employee_id: DataTypes.STRING(10),
        method_id: DataTypes.STRING(10),
        total: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Bill',
        tableName: 'bill'
    });
    return Bill;
};
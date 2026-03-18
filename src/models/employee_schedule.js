'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class EmployeeSchedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            EmployeeSchedule.belongsTo(models.Employee, {foreignKey: 'employee_id'});
            EmployeeSchedule.belongsTo(models.Schedule, {foreignKey: 'schedule_id'});
        }
    }
    EmployeeSchedule.init({
        employee_schedule_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        employee_id: DataTypes.STRING(10),
        schedule_id: DataTypes.STRING(10),
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'EmployeeSchedule',
        tableName: 'employee_schedule'
    });
    return EmployeeSchedule;
};
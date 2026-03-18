'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Employee.belongsToMany(models.Schedule, {through: models.EmployeeSchedule, foreignKey: 'employee_id'});
            Employee.hasMany(models.Appointment, {foreignKey: 'employee_id'});
            Employee.hasMany(models.Bill, {foreignKey: 'employee_id'});
        }
    }
    Employee.init({
        employee_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        is_admin: DataTypes.BOOLEAN,
        fullname: DataTypes.STRING,
        avatar: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        gender: DataTypes.BOOLEAN,
        phone: DataTypes.CHAR(10),
        degree: DataTypes.STRING,
        start_date: DataTypes.DATEONLY,
        street: DataTypes.STRING,
        ward: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        email: DataTypes.STRING(100),
        password: DataTypes.STRING,
        is_activated: DataTypes.BOOLEAN,
        is_blocked: DataTypes.BOOLEAN,
        refresh_token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Employee',
        tableName: 'employee'
    });
    return Employee;
};
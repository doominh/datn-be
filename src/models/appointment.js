'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Appointment.belongsTo(models.Type, {foreignKey: 'type_id'});
            Appointment.belongsTo(models.Patient, {foreignKey: 'patient_id'});
            Appointment.belongsTo(models.Employee, {foreignKey: 'employee_id'});
            Appointment.belongsTo(models.DoctorSchedule, {foreignKey: 'doctor_schedule_id'});
            Appointment.belongsToMany(models.Service, {through: models.Detail, foreignKey: 'appointment_id'});

        }
    }
    Appointment.init({
        appointment_id: {   
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        type_id: DataTypes.STRING(10),
        doctor_schedule_id: DataTypes.STRING(10),
        patient_id: DataTypes.STRING(10),
        employee_id: DataTypes.STRING(10),
        fullname: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        gender: DataTypes.BOOLEAN,
        phone: DataTypes.CHAR(10),
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Appointment',
        tableName: 'appointment'
    });
    return Appointment;
};
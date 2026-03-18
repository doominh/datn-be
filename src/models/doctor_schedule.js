'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DoctorSchedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            DoctorSchedule.belongsTo(models.Doctor, {foreignKey: 'doctor_id'});
            DoctorSchedule.belongsTo(models.Schedule, {foreignKey: 'schedule_id'});
            DoctorSchedule.hasMany(models.Appointment, {foreignKey: 'doctor_schedule_id'});
        }
    }
    DoctorSchedule.init({
        doctor_schedule_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        doctor_id: DataTypes.STRING(10),
        schedule_id: DataTypes.STRING(10),
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'DoctorSchedule',
        tableName: 'doctor_schedule'
    });
    return DoctorSchedule;
};
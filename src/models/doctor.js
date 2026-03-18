'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Doctor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Doctor.belongsToMany(models.Category, {through: models.DoctorCategory, foreignKey: 'doctor_id'});
            Doctor.belongsToMany(models.Schedule, {through: models.DoctorSchedule, foreignKey: 'doctor_id'});
        }
    }
    Doctor.init({
        doctor_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
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
        html: DataTypes.TEXT('long'),
        markdown: DataTypes.TEXT('long'),
        email: DataTypes.STRING(100),
        password: DataTypes.STRING,
        is_activated: DataTypes.BOOLEAN,
        is_blocked: DataTypes.BOOLEAN,
        refresh_token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Doctor',
        tableName: 'doctor'
    });
    return Doctor;
};
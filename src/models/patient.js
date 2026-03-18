'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Patient extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Patient.hasMany(models.Appointment, {foreignKey: 'patient_id'});
            Patient.hasMany(models.Bill, {foreignKey: 'patient_id'});
        }
    }
    Patient.init({
        patient_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        fullname: DataTypes.STRING,
        avatar: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        gender: DataTypes.BOOLEAN,
        phone: DataTypes.CHAR(10),
        street: DataTypes.STRING,
        ward: DataTypes.STRING,
        district: DataTypes.STRING,
        city: DataTypes.STRING,
        file: DataTypes.BLOB('medium'),
        email: DataTypes.STRING(100),
        password: DataTypes.STRING,
        is_activated: DataTypes.BOOLEAN,
        is_blocked: DataTypes.BOOLEAN,
        refresh_token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Patient',
        tableName: 'patient'
    });
    return Patient;
};
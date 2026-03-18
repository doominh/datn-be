'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Schedule.belongsTo(models.Session, {foreignKey: 'session_id'});
            Schedule.belongsToMany(models.Doctor, {through: models.DoctorSchedule, foreignKey: 'schedule_id'});
            Schedule.belongsToMany(models.Employee, {through: models.EmployeeSchedule, foreignKey: 'schedule_id'});
        }
    }
    Schedule.init({
        schedule_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        session_id: DataTypes.STRING(10),
        date: DataTypes.DATEONLY,
    }, {
        sequelize,
        modelName: 'Schedule',
        tableName: 'schedule'
    });
    return Schedule;
};
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Session.hasMany(models.Schedule, {foreignKey: 'session_id'});
        }
    }
    Session.init({
        session_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        time: DataTypes.STRING,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Session',
        tableName: 'session'
    });
    return Session;
};
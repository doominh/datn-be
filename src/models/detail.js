'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Detail.belongsTo(models.Appointment, {foreignKey: 'appointment_id'});
            Detail.belongsTo(models.Service, {foreignKey: 'service_id'});
        }
    }
    Detail.init({
        detail_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        appointment_id: DataTypes.STRING(10),
        service_id: DataTypes.STRING(10),
        quantity: DataTypes.INTEGER,
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Detail',
        tableName: 'detail'
    });
    return Detail;
};
'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Service.belongsTo(models.Category, {foreignKey: 'category_id'});
            Service.belongsToMany(models.Appointment, {through: models.Detail, foreignKey: 'service_id'});
            Service.belongsToMany(models.Bill, {through: models.BillService, foreignKey: 'service_id'});
        }
    }
    Service.init({
        service_id: {
            type: DataTypes.STRING(10),
            primaryKey: true
        },
        category_id: DataTypes.STRING(10),
        service_name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Service',
        tableName: 'service'
    });
    return Service;
};
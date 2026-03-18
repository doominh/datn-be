'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class BillService extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            BillService.belongsTo(models.Bill, {foreignKey: 'bill_id'});
            BillService.belongsTo(models.Service, {foreignKey: 'service_id'});
        }
    }
    BillService.init({
        bill_service_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bill_id: DataTypes.STRING(10),
        service_id: DataTypes.STRING(10),
        quantity: DataTypes.INTEGER,
        subtotal: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'BillService',
        tableName: 'bill_service'
    });
    return BillService;
};
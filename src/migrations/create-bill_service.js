'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bill_service', {
            bill_service_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bill_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            service_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            subtotal: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('bill_service');
    }
};
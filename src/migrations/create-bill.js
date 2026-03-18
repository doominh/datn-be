'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bill', {
            bill_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(10)
            },
            patient_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            employee_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            method_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            total: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            status: {
                allowNull: false,
                type: Sequelize.BOOLEAN
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
        await queryInterface.dropTable('bill');
    }
};
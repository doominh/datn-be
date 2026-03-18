'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('employee_schedule', {
            employee_schedule_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            employee_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            schedule_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
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
        await queryInterface.dropTable('employee_schedule');
    }
};
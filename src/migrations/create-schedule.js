'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('schedule', {
            schedule_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(10)
            },
            session_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            date: {
                allowNull: false,
                type: Sequelize.DATEONLY
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
        await queryInterface.dropTable('schedule');
    }
};
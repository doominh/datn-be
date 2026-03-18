'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('appointment', {
            appointment_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(10)
            },
            type_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            doctor_schedule_id: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            patient_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            employee_id: {
                allowNull: false,
                type: Sequelize.STRING(10)
            },
            fullname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            dob: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            gender: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            phone: {
                allowNull: false,
                type: Sequelize.CHAR(10)
            },
            status: {
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
        await queryInterface.dropTable('appointment');
    }
};
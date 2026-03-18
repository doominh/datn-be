'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('doctor', {
            doctor_id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING(10)
            },
            fullname: {
                allowNull: false,
                type: Sequelize.STRING
            },
            avatar: {
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
                unique: true,
                type: Sequelize.CHAR(10)
            },
            degree: {
                allowNull: false,
                type: Sequelize.STRING
            },
            start_date: {
                type: Sequelize.DATEONLY
            },
            street: {
                type: Sequelize.STRING
            },
            ward: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            html: {
                type: Sequelize.TEXT('long')
            },
            markdown: {
                type: Sequelize.TEXT('long')
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(100)
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING
            },
            is_activated: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            is_blocked: {
                allowNull: false,
                type: Sequelize.BOOLEAN
            },
            refresh_token: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('doctor');
    }
};
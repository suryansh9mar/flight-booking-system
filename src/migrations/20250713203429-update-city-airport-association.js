'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('airports', {
      type: 'FOREIGN KEY',
      fields:['cityId'],
      name:'city_foreign_constraint',
      references: {
        table: 'cities',
        field: 'id'
      },
      opUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint('airports', 'city_foreign_constraint');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let activities = await queryInterface.bulkInsert("Lists", [
      {
        date: '03/15/21',
        name:'Amy',
        activity: 'Dance',
        time: '5-6pm'
    },
    {
        date: '03/15/21',
        name:'Carol',
        activity: 'Dance',
        time: '6-7pm'
    },
    {
        date: '03/15/21',
        name:'Tom',
        activity: 'Dr. Appt',
        time: '4-5pm'
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

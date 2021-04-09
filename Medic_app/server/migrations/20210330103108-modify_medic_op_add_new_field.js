'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'medic_ops', // table name
        'authentication_token', // new field name
        {
          type: Sequelize.STRING
        },
      ),
      queryInterface.addColumn(
        'medic_ops',
        'email',  
        {
          type: Sequelize.STRING
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('medic_ops', 'authentication_token'),
      queryInterface.removeColumn('medic_ops', 'email'),
    ]);
  }
};

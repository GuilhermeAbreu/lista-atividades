'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('atividade', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
      },
      descricao: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
      },
      concluido: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      data_criacao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      data_conclusao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('atividade');
  }
};

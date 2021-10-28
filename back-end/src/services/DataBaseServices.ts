import { Sequelize } from "sequelize-typescript";
import { ConfigurationBd } from "../config/Config";

const DataBase = new Sequelize(
  ConfigurationBd.DATABASE,
  ConfigurationBd.USER,
  ConfigurationBd.PASSWORD,
  {
    //@ts-ignore
    dialect: ConfigurationBd.DIALECT,
    host: ConfigurationBd.HOST,
    logging: ConfigurationBd.SHOW_LOG ? console.debug.bind : false,
    native: false,
    define: {
      underscored: true,
      freezeTableName: true,
      charset: "utf8",
      timestamps: false,
    },
    sync: { force: true },
    pool: {
      max: ConfigurationBd.MAX_POOL,
      idle: ConfigurationBd.IDLE,
      acquire: ConfigurationBd.ACQUIRE,
    },
  }
);

export default DataBase;

import { Sequelize } from "sequelize";
import { SequelizeOptions } from "sequelize-typescript";
import { options } from "../database/config/config.mjs";

// const dbOptions = <SequelizeOptions>options;
// dbOptions.dialectModule = require("mysql2");

// const sequelize = new Sequelize(dbOptions);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

export default sequelize;

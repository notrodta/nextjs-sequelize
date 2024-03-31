// import { Sequelize } from "sequelize";
import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import { options } from "../database/config/config.mjs";
import User from "./models/User";
import Team from "./models/Team";

// const dbOptions = <SequelizeOptions>options;
// dbOptions.dialectModule = require("mysql2");

// const sequelize = new Sequelize(dbOptions);

console.log("process: " + process.cwd() + '/src/models/User.ts')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    models: [User, Team]
  });

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: './database.sqlite'
//   });


export default sequelize;

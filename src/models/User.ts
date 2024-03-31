// import { Model, DataTypes } from "sequelize";
import sequelize from "../db_connection";

// class User extends Model {
//   declare id: number;
//   declare name: string;
//   declare preferred_name: string | null;
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: new DataTypes.STRING(),
//       allowNull: false,
//     },
//     preferred_name: {
//       type: new DataTypes.STRING(),
//     },
//   },
//   {
//     tableName: "users",
//     sequelize,
//     createdAt: "created_at",
//     updatedAt: "updated_at",
//   }
// );

// (async () => {
//   await sequelize.sync({force: true});
//   console.log("recreated");
// })()

// export default User;

import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BeforeCreate,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Team from "./Team";

interface UserAttributes {
  id: string;
  name: string;
  preferred_name: string;
  teamId: number;
  team: Team;
  created_at: Date;
  updated_at: Date;
}

@Table({
  timestamps: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model<UserAttributes> {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare preferred_name: string;

  @ForeignKey(() => Team)
  @Column
  declare teamId: number;

  @BelongsTo(() => Team)
  declare team: Team;

  @CreatedAt
  declare created_at: Date;

  @UpdatedAt
  declare updated_at: Date;
}

// (async () => {
//   await sequelize.sync({force: true});
//   console.log("recreated");
// })()

export default User;


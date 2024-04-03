import sequelize from "@/db_connection";
import Team from "@/models/Team";
import User, { Book } from "@/models/User";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  await sequelize.sync();
  const teams = await Team.findAll({include: ['users']});
//   console.log(teams.every((user: any) => user instanceof Team));
//   console.log("all Users:", JSON.stringify(teams, null, 2));
//   console.log("team user!!!!");
//   console.log(teams[0]);

  return Response.json(teams);
}

export async function POST(request: NextRequest) {
  await sequelize.sync({force: true});
  const team = await Team.create(
    { name: "Team 3", users: [{ name: "bob", books: [{name: 'book1'}] }, {name: 'sam', books: [{name: 'book2'}]} ]},
    // { include: [User] }
    {
        include: [{model: User, include: [Book]}]
    }
  );
  console.log(team instanceof Team);
  console.log(team.name);
  return Response.json(team);
}

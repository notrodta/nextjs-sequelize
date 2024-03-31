import sequelize from "@/db_connection";
import Team from "@/models/Team";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    await sequelize.sync({ alter: true });
    const teams = await Team.findAll();
    console.log(teams.every((user: any) => user instanceof Team));
    console.log("all Users:", JSON.stringify(teams, null, 2));
    return Response.json(teams);
}

export async function POST(request: NextRequest) {
    await sequelize.sync({ alter: true });
    const team = await Team.create({ name: 'Team 3' });
    console.log(team instanceof Team)
    console.log(team.name);
    return Response.json(team);
}
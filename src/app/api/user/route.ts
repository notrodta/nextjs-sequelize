import sequelize from "@/db_connection";
import User from "@/models/User";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest) {
    await sequelize.sync();
    const users = await User.findAll();
    console.log(users.every((user: any) => user instanceof User));
    console.log("all Users:", JSON.stringify(users, null, 2));
    return Response.json(users);
}

export async function POST(request: NextRequest) {
    await sequelize.sync();
    const user = await User.create({ name: 'Jane' });
    console.log(user instanceof User)
    console.log(user.name);
    return Response.json(user);
}
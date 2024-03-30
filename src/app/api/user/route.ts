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
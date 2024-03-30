import User from "@/models/User";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const user = await User.create({ name: 'Jane' });
    console.log(user instanceof User)
    console.log(user.name);
    return Response.json(user);
}
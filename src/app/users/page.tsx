import sequelize from "@/db_connection";
import User from "../../models/User";

export const dynamic = "force-dynamic";


async function getData() {
  const response = await fetch("http://localhost:3000/api/user");
  const data = await response.json();
  return data
}

async function initializeData() {
  // const response = await fetch("http://localhost:3000/api/user/create");
  const response = await fetch("http://localhost:3000/api/user", {
    method: 'POST'
  });
  const data = await response.json();
  console.log(".....");
  console.log(data);
  return data;
}


export default async function Page() {
  await initializeData();
  const users = await getData();

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div>
        {users.map((user: any) => (
          <div key={user.id}>Name: {user.name}</div>
        ))}
      </div>
    </main>
  );
}

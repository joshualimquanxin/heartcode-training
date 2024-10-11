import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "@/db/schema";
// import { db } from "../db";

// export async function insertOneUser(name: string, isDrugDealer: boolean) {
//     await db.insert(users).
// }
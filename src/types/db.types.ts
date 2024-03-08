import { db } from "../data/db";

export type User     = typeof db.users[number];
export type Movie    = typeof db.content[number];
export type Category = typeof db.categories[number];

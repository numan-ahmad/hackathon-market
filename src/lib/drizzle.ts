import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import {pgTable, varchar, integer, serial, text} from "drizzle-orm/pg-core";

export const cartTable = pgTable('cartdetails', {
    id: serial('id').primaryKey(),
    product_id: text('product_id').notNull(),
    quantity: integer('quantity'),
    title: text('title'),
    price: integer('price'),
});

export const db = drizzle(sql);
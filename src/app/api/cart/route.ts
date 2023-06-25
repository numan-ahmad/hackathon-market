import { cartTable, db } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const res = await db.select().from(cartTable);
    return NextResponse.json({ message: "successfuly", res });
  } catch (err) {
    return NextResponse.json({ message: "Somthing went wrong!", err });
  }
};

export const DELETE = async (request: NextRequest) => {
  const req = request.nextUrl;
  const id = req.searchParams.get("id") as string;
  try {
    const res = await db
      .delete(cartTable)
      .where(eq(cartTable.product_id, id))
      .returning();
    return NextResponse.json({ message: "successfuly Deleted", res });
  } catch (err) {
    return NextResponse.json({ message: "faild to delete", err });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const checkIfExist = await db.select().from(cartTable).where(eq(cartTable.product_id, req.product._id));
    let result;
    if (!checkIfExist.length) {
      result = await db
        .insert(cartTable)
        .values({
          product_id: req.product._id,
          quantity: req.quantity,
          price: req.product.price,
          title: req.product.title,
        })
        .returning();
    } else {
     result = await db
        .update(cartTable)
        .set({ quantity: checkIfExist[0].quantity + req.quantity })
        .where(eq(cartTable.product_id, req.product._id)).returning();
    }
    return NextResponse.json({ message: "successfuly added in db", result });
  } catch (err) {
    return NextResponse.json({ message: "faild", err });
  }
};

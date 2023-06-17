import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, "dajdjgasdsgajd ashlleloasjsadjkashk");
  try {
    if (body.length) {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        submit_type: 'pay',
        mode: "payment",
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
            {shipping_rate: 'shr_1NJvW3GBtSuTEzCDkT5UOcY8'},
            {shipping_rate: 'shr_1NJvV4GBtSuTEzCDKNW3njON'}
        ],
        line_items: body.map((item: any) => {
            return {
                price_data: {
                    currency: 'pkr',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
            };
        }),
        success_url: `${request.headers.get("origin")}/?success=true`,
        cancel_url: `${request.headers.get("origin")}/`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "no data found" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err });
  }
}

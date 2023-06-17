'use client'
import getStripePromise from "@/lib/stripe";
const StrioeCheckButton = () => {
    const handlecheckout = async() => {
        const stripe= await getStripePromise();
        const products = [
        {
            product: 1,
            name: "shirt",
            price: 440,
            quantity: 3,
        },
        {
            product: 2,
            name: "shirt",
            price: 460,
            quantity: 3,
        },
        {
            product: 3,
            name: "shirt",
            price: 470,
            quantity: 3,
        },
    ];
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            cache: "no-cache",
            body: JSON.stringify(products),
        })
        const data = await response.json();
        if(data.session) {
            console.log('dasdasdasdasdasdasdasdasdasdasda')
            stripe?.redirectToCheckout({sessionId: data.session.id})
        }
    }

    return(
        <div className="py-5">
            <button className="bg-green-500 py-3 px-3 rounded-md" onClick={handlecheckout}>Check out</button>
        </div>
    )

}

export default StrioeCheckButton;
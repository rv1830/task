// import { Stripe } from 'stripe';

// const stripe = new Stripe('sk_test_51QjmB9JdAaRZB21E183HwTYdrxJLLFlsN4hw34Cy2ntwQMHToQ5hA9dSGt1o4b5gpFJuNeLu6FKOzG2ObOhITFeY00dDH1igiB');

// export async function POST(req) {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Premium Subscription',
//             },
//             unit_amount: 9999,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `http://localhost:3000/cancel`,
//     });

//     return new Response(
//       JSON.stringify({ id: session.id }),
//       {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ error: err.message }),
//       { status: 500 }
//     );
//   }
// }

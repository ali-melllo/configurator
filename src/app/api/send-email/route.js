import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { products , email , fullName } = await req.json();

    if (!products || !Array.isArray(products)) {
      return new Response(JSON.stringify({ error: "Invalid products data" }), { status: 400 });
    }

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL,
      subject: "🛒 New Product Price Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; text-align: center;">🛍️ New Product Prices Received</h2>
          <p style="color: #666; text-align: center;">Here are the latest product prices submitted by <strong>${fullName}</strong>:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <thead>
              <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
                <th style="padding: 10px; text-align: left;">📦 Products</th>
                <th style="padding: 10px; text-align: right;">💰 Price</th>
              </tr>
            </thead>
            <tbody>
              ${products
                .map(
                  (product) => `
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px;">${product.objectName}</td>
                  <td style="padding: 10px; text-align: right;">${product.price} €</td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>

          <p style="margin-top: 20px; color: #555; text-align: center;">
            📧 <strong>Sent by:</strong> ${email}
          </p>

          <p style="text-align: center; font-size: 12px; color: #999;">
            This is an automated message. Please do not reply.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: emailResponse }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, products } = await req.json(); // Expecting [{ name: "Product A", price: "$20" }, ...]

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "alimelllo32@gmail.com",
        pass: "",
      },
    });

    // Email Template with Beautiful Styling
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "platform-owner@example.com",
      subject: "🛒 New Product Price Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; text-align: center;">🛍️ New Product Prices Received</h2>
          <p style="color: #666; text-align: center;">Here are the latest product prices submitted by <strong>${email}</strong>:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <thead>
              <tr style="background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
                <th style="padding: 10px; text-align: left;">📦 Product</th>
                <th style="padding: 10px; text-align: right;">💰 Price</th>
              </tr>
            </thead>
            <tbody>
              ${products
                .map(
                  (product) => `
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 10px;">${product.objectName}</td>
                  <td style="padding: 10px; text-align: right;">${product.price}</td>
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
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

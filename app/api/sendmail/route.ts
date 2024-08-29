import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Access the JSON data from req.body
    const { name, email, phoneNumber, interests } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "ah0918047@gmail.com",
      subject: "New Demo Request",
      html: `
        <h1>Demo Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Interests:</strong> ${interests.join(", ")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: "Failed to send email", error });
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(405).json({ message: "Hi hanan" });
}

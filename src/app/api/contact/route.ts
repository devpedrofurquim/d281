import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const {
                first_name,
                last_name,
                email,

                company_name,
                help,
                services,
                info,
            } = await req.json();

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.GMAIL_USER,
                    pass: process.env.GMAIL_PASSWORD,
                },
            });

            const mailOptions = {
                from: email,
                to: process.env.GMAIL_USER,
                subject: "Contact From Submission",
                html: `
                        <h1>Contact Form</h1>
                        <p>First name: ${first_name}</p>
                        <p>Last name: ${last_name}</p>
                        <p>Work name: ${email}</p>

                        <p>Company name: ${company_name}</p>
                        <p>Help: ${help}</p>
                        <p>Service: ${services}</p>

                        <p>Info: ${info}</p>
                `
            };

            await transporter.sendMail(mailOptions);

            return NextResponse.json("email has been sent");
        } 
        catch (error) {
            return NextResponse.json(`Email has not been sent, error: ${error}`);
        } 
    } else {
    return NextResponse.json('method not allowed');
    }
}
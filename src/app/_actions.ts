"use server";

import { z } from "zod";
import { ContactFormSchema } from "../lib/schema";
import { Resend } from "resend";
import ContactFormEmail from "../components/email-template";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);
const emailAddress = process.env.EMAIL as string;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: z.flattenError(result.error) };
  }

  const {
    name,
    phone,
    email,
    business,
    service,
    message,
    website,
    budget,
    timeline,
  } = result.data;

  try {
    const sent = await resend.emails.send({
      from: "contactform@fulltiltdigital.co.uk",
      to: emailAddress,
      replyTo: email,
      subject: "Contact Form Submission",
      text:
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Business: ${business}\n` +
        `Service: ${service}\n` +
        `Website: ${website || "Not provided"}\n` +
        `Budget: ${budget || "Not provided"}\n` +
        `Timeline: ${timeline || "Not provided"}\n` +
        `Message:\n${message}`,
      react: ContactFormEmail({
        name,
        phone,
        email,
        business,
        service,
        message,
        website,
        budget,
        timeline,
      }),
    });

    return { success: true, data: sent };
  } catch (error) {
    console.error("Resend send error:", error);
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
          ? error
          : JSON.stringify(error);

    return { success: false, error: message };
  }
}

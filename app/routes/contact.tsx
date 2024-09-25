import { json, useFetcher } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Header } from "~/components/header";
import { NavigationMenu } from "~/components/navigation-menu";
import { Icons } from "~/components/ui/icons";
import { z } from "zod";
import { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import nodemailer from "nodemailer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Footer } from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Contact | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:title",
      content:
        "Contact | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:description",
      content: "Get in touch with us",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.sunnypizzastuttgart.de/contact",
    },
    {
      name: "description",
      content: "Get in touch with us",
    },
    {
      property: "og:image",
      content:
        "https://www.sunnypizzastuttgart.de/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
    },
    {
      property: "og:image:width",
      content: "1024",
    },
    {
      property: "og:image:height",
      content: "1024",
    },
    {
      property: "og:locale",
      content: "en_GB",
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FoodEstablishment",
        description:
          "Combining the rich traditions of Italian cuisine with the fragrant spices of India, we specialise in a variety of classical favourites such as Pizza, Pinsa and Pasta, all with an Indian twist",
        name: "Sunny Pizza & Pinsa",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Eugenstraße 12",
          addressLocality: "Stuttgart-Mitte",
          postalCode: "70182",
          addressCountry: "DE",
        },
        image:
          "https://www.sunnypizzastuttgart.de/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
        telephone: "07112384788",
        email: "sunny-singh@hotmail.de",
        url: "https://www.sunnypizzastuttgart.de",
        hasMenu:
          "https://www.sunnypizzastuttgart.de/assets/menus/sunny-pizza-menu.pdf",
        servesCuisine: "Italian",
        paymentAccepted: ["Cash", "Credit Card"],
        keywords: ["Pizza", "Pinsa", "Stuttgart", "Takeout"],
        priceRange: "$$",
        logo: "https://www.sunnypizzastuttgart.de/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "17:00:00",
            closes: "23:00:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "12:00:00",
            closes: "23:00:00",
          },
        ],
      },
    },
  ];
};

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const submission = Object.fromEntries(formData);
  switch (request.method) {
    case "POST":
      try {
        const validatedData = contactSchema.parse(submission);

        // Create a transporter using SMTP
        const transporter = nodemailer.createTransport({
          host: process.env.MAILER_HOST || "",
          port: Number(process.env.MAILER_PORT),
          auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASS,
          },
        });

        // Send email
        const info = await transporter.sendMail({
          from: `"Sunny Pizza Contact Form" <${process.env.MAILER_USER}>`,
          to: validatedData.email,
          subject: `New Contact Form Submission: ${validatedData.subject}`,
          text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Subject: ${validatedData.subject}
        Message: ${validatedData.message}
      `,
          html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
        });

        return json({ success: true, errors: [], payload: [info] });
      } catch (error) {
        if (error instanceof z.ZodError) {
          return json(
            {
              errors: error.flatten().fieldErrors,
              success: false,
              payload: [],
            },
            { status: 400 }
          );
        }
        return json(
          { errors: [error], success: false, payload: [] },
          { status: 500 }
        );
      }
    default:
      return json({ success: true, errors: [], payload: [] });
  }
}

export default function Contact() {
  const fetcher = useFetcher<typeof action>();
  const form = useRef<HTMLFormElement>(null);
  const [open, setOpen] = useState(false);
  const [isSent, setIsSent] = useState(false);
  console.log(fetcher);
  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      fetcher?.data?.success &&
      fetcher?.data?.payload?.length &&
      !isSent &&
      !open
    ) {
      setIsSent(true);
      setOpen(true);
      form.current?.reset();
    }
  }, [fetcher, isSent, open]);

  return (
    <div>
      <NavigationMenu />
      <Header
        title="Contact Sunny Pizza Stuttgart"
        copy="Get in touch with us"
        background="/assets/images/pizza.jpg"
      />
      <section className="max-w-4xl mx-auto px-4 py-12 mt-8 text-muted-foreground">
        <div className="prose prose-lg flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
          <p>
            We&apos;d love to hear from you! Whether you have a question about
            our menu, want to make a reservation, or just want to say hello,
            feel free to reach out to us using any of the methods below.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <ul className="list-none p-0">
                <li className="flex items-center gap-2 mb-2">
                  <Icons.phone size={20} />
                  <span>0711 - 2384 788</span>
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <Icons.mail size={20} />
                  <a
                    href="mailto:sunny-singh@hotmail.de"
                    className="text-blue-600 hover:underline"
                  >
                    sunny-singh@hotmail.de
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icons.address size={20} />
                  <span>Eugenstraße 12, 70182 Stuttgart-Mitte</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <ul className="list-none p-0">
                <li className="mb-1">
                  <strong>Monday:</strong> Closed
                </li>
                <li className="mb-1">
                  <strong>Tuesday - Saturday:</strong> 5:00 PM - 11:00 PM
                </li>
                <li className="mb-1">
                  <strong>Sunday & Holidays:</strong> 12:00 PM - 11:00 PM
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <p>
              Have a specific question or comment? Use the form below to send us
              a message, and we&apos;ll get back to you as soon as possible.
            </p>
            {fetcher.state === "loading" && <p>Sending message...</p>}
            <fetcher.Form
              className="mt-4 grid sm:grid-cols-2 gap-4"
              action="/contact"
              method="post"
              ref={form}
              onSubmit={() => setIsSent(false)}
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded"
                  required
                />
                {fetcher.data?.errors instanceof Object &&
                  "name" in fetcher.data.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {fetcher.data.errors.name}
                    </p>
                  )}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  inputMode="email"
                  className="w-full p-2 border rounded"
                  required
                />
                {fetcher.data?.errors instanceof Object &&
                  "email" in fetcher.data.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {fetcher.data.errors.email}
                    </p>
                  )}
              </div>
              <div className="mb-4 col-span-full">
                <label htmlFor="subject" className="block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-2 border rounded"
                  required
                />
                {fetcher.data?.errors instanceof Object &&
                  "subject" in fetcher.data.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {fetcher.data.errors.subject}
                    </p>
                  )}
              </div>
              <div className="mb-4 col-span-full">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
                {fetcher.data?.errors instanceof Object &&
                  "message" in fetcher.data.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {fetcher.data.errors.message}
                    </p>
                  )}
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 rounded-full"
              >
                Send Message
              </button>
            </fetcher.Form>
          </div>
        </div>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you!</DialogTitle>
            <DialogDescription>
              Your message has been sent successfully!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
}

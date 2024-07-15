import type { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { CtaSection } from "~/sections/homepage/cta-section";
import { HomeIntroSection } from "~/sections/homepage/intro-section";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:title",
      content:
        "Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:description",
      content:
        "Combining the rich traditions of Italian cuisine with the fragrant spices of India, we specialise in a variety of classical favourites such as Pizza, Pinsa and Pasta, all with an Indian twist",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.sunnypizzastuttgart.com",
    },
    {
      name: "description",
      content:
        "Combining the rich traditions of Italian cuisine with the fragrant spices of India, we specialise in a variety of classical favourites such as Pizza, Pinsa and Pasta, all with an Indian twist",
    },
    {
      property: "og:image",
      content:
        "https://sunnypizzastuttgart.com/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
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
          "https://sunnypizzastuttgart.com/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
        telephone: "07112384788",
        email: "sunny-singh@hotmail.de",
        url: "https://sunnypizzastuttgart.com",
        hasMenu:
          "https://sunnypizzastuttgart.com/assets/menus/sunny-pizza-menu.pdf",
        servesCuisine: "Italian",
        paymentAccepted: ["Cash", "Credit Card"],
        keywords: ["Pizza", "Pinsa", "Stuttgart", "Takeout"],
        priceRange: "$$",
        logo: "https://sunnypizzastuttgart.com/assets/images/sunny-pizza-stuttgart-logo-bg.jpg",
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

export default function Index() {
  return (
    <main className="flex flex-col font-sans bg-gradient-to-br from-slate-100 to-slate-200 min-h-screen">
      <Header />
      <HomeIntroSection className="my-12" />
      <CtaSection />
      <Footer />
    </main>
  );
}

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
      name: "description",
      content:
        "Combining the rich traditions of Italian cuisine with the fragrant spices of India, we specialise in a variety of classical favourites such as Pizza, Pinsa and Pasta, all with an Indian twist",
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
          "https://sunnypizzastuttgart.com/assets/images/sunny-pizza-logo.png",
        telephone: "07112384788",
        email: "sunny-singh@hotmail.de",
        url: "https://sunnypizzastuttgart.com",
        hasMenu:
          "https://sunnypizzastuttgart.com/assets/menus/sunny-pizza-menu.pdf",
        servesCuisine: "Italian",
        paymentAccepted: ["Cash", "Credit Card"],
        keywords: ["Pizza", "Pinsa", "Stuttgart", "Takeout"],
        priceRange: "$$",
        logo: "https://sunnypizzastuttgart.com/assets/images/sunny-pizza-logo.png",
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

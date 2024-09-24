import { MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { NavigationMenu } from "~/components/navigation-menu";
import { AnchorLink } from "~/components/ui/anchor-link";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Menu | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:title",
      content:
        "Menu | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:description",
      content: "Find our menu and prices here",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.sunnypizzastuttgart.de/menu",
    },
    {
      name: "description",
      content: "Find our menu and prices here",
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

export default function Menu() {
  return (
    <div>
      <NavigationMenu />
      <Header
        title="Menu Sunny Pizza Stuttgart"
        copy="Find our menu and prices here"
        background="/assets/images/menu-header.jpg"
      />
      <section className="max-w-4xl mx-auto px-4 py-12 mt-8 text-muted-foreground">
        <div className="prose prose-lg flex flex-col gap-4 text-lg font-light">
          <p>
            Welcome to our menu page. Here, you can find a link to our current
            PDF menu, which showcases our delicious fusion of Italian and Indian
            flavors.
          </p>
          <p>
            Please note that while we strive to keep our online menu up-to-date,
            prices and availability may vary. For the most accurate information,
            we recommend checking our in-store menu during your visit.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-8 bg-blue-50 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Our Menu</h2>
        <p className="mb-4 text-muted-foreground">
          Click the link below to view our current menu:
        </p>
        <AnchorLink
          className="inline-block bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 hover:no-underline transition-colors"
          href="/assets/menus/sunny-pizza-menu.pdf"
          title="View our menu"
          rel="noopener noreferrer"
          target="_blank"
        >
          View Menu (PDF)
        </AnchorLink>
        <p className="mt-4 text-sm text-muted-foreground">
          Disclaimer: Prices and items on the PDF menu may not reflect current
          offerings. Please refer to our in-store menu for the most up-to-date
          information.
        </p>
      </section>
      <Footer />
    </div>
  );
}

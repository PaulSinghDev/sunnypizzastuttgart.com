import { MetaFunction } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { NavigationMenu } from "~/components/navigation-menu";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "About | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:title",
      content:
        "About | Sunny Pizza & Pinsa, Stuttgart | Indian Pizza & Pinsa to Takeout",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:description",
      content: "Find out more about Sunny Pizza Stuttgart and our journey",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.sunnypizzastuttgart.de/about",
    },
    {
      name: "description",
      content: "Find out more about Sunny Pizza Stuttgart and our journey",
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

export default function About() {
  return (
    <div>
      <NavigationMenu />
      <Header
        title="About Sunny Pizza Stuttgart"
        copy="Read about our journey and passion"
        background="/assets/images/pizza.jpg"
      />
      <section className="max-w-4xl mx-auto px-4 py-12 mt-8 text-muted-foreground">
        <div className="prose prose-lg flex flex-col gap-4 text-lg font-light">
          <p>
            Welcome to Sunny Pizza Stuttgart, a unique culinary experience that
            brings together the best of Italian and Indian flavors right in the
            heart of Stuttgart. Our restaurant is the brainchild of the owner of
            the renowned &apos;Prince of India&apos;, a beloved Indian
            restaurant that has been delighting Stuttgart&apos;s food
            enthusiasts for years.
          </p>
          <p>
            At Sunny Pizza, we&apos;ve taken the art of pizza-making and infused
            it with the rich, aromatic spices and innovative culinary techniques
            that made &apos;Prince of India&apos; a local favorite. Our mission
            is to offer you a pizza experience like no other, combining the
            crispy, cheesy goodness of traditional Italian pizza with the bold,
            exciting flavors of Indian cuisine.
          </p>
          <p>
            Whether you&apos;re a long-time fan of &apos;Prince of India&apos;
            or a pizza lover looking for something new and exciting, we invite
            you to join us on this flavorful journey. Come taste how we&apos;re
            reimagining pizza in Stuttgart, one delicious slice at a time!
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto p-8 rounded-lg bg-blue-50 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/images/sunny-singh.jpg"
              alt="Sunny Singh, owner of Sunny Pizza Stuttgart"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 prose prose-lg">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Meet Our Owner
            </h2>
            <div className="flex flex-col gap-4 text-lg font-light text-muted-foreground">
              <p>
                Sunny Singh, the visionary behind Sunny Pizza Stuttgart, is the
                heart and soul of our restaurant. Originally from a small
                village in Punjab, India, Sunny brought with him a passion for
                food and a dream of creating something unique in Stuttgart.
              </p>
              <p>
                As the owner of both &apos;Prince of India&apos; and Sunny
                Pizza, Sunny has successfully blended his Indian heritage with
                his love for Italian cuisine. His innovative approach to
                pizza-making has resulted in the delightful fusion flavors that
                our customers have come to love and crave.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

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

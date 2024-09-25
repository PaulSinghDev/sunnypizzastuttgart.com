import { AnchorLink } from "../ui/anchor-link";
import { Icons } from "../ui/icons";

export function Header({
  title,
  copy,
  background,
}: {
  title?: string;
  copy?: string;
  background?: string;
}) {
  return (
    <header
      className={`flex flex-col mt-nav min-h-[600px] before:bg-gradient-to-t from-slate-950 from-60% to-transparent to-90% p-4 pt-20 pb-12 relative before:absolute before:w-full before:h-full before:contents-[''] bg-center bg-cover before:top-0 before:left-0 before:-z-1 before:opacity-70`}
      style={{
        backgroundImage: `url(${
          background || "/assets/images/pizza-header.jpeg"
        })`,
      }}
    >
      <div className="z-1 p-8 mb-4 w-full relative max-w-content m-auto text-white flex flex-col gap-4 justify-center grow h-full">
        <div className="flex flex-col mt-auto items-center">
          <div className="p-3 bg-rose-800 rounded-full mb-4 shadow-md">
            <img
              src="/assets/images/sunny-pizza-logo.png"
              width={75}
              height={75}
              alt="Cartoon like crown made out of pizza slices"
            />
          </div>
          <h1 className="text-5xl text-pretty lg:text-6xl font-bold text-center text-shadow">
            {title || "Sunny Pizza & Pinsa, Stuttgart"}
          </h1>
          <p className="text-xl text-shadow-sm mt-2 font-light">
            {copy || "From India to Italy via Germany"}
          </p>
        </div>
        <div className="text-sm flex flex-col gap-2 items-center">
          <div className="text-center inline-flex gap-2">
            <Icons.pin size={20} /> Eugenstraße 12•70182 Stuttgart-Mitte
          </div>
          <div className="text-center inline-flex gap-2">
            <Icons.phone size={20} /> 0711 - 2384 788
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <AnchorLink
            className="grow text-white min-w-[150px] max-w-[200px] bg-blue-600 inline-flex gap-2 items-center rounded-full"
            size={"md"}
            variant={"button"}
            href="/assets/menus/sunny-pizza-menu.pdf"
            title="View our menu"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.menu size={15} />
            View Menu
          </AnchorLink>
          <AnchorLink
            size={"md"}
            variant={"button"}
            className="grow bg-blue-600 text-white min-w-[150px] max-w-[200px] inline-flex gap-2 items-center rounded-full"
            href="tel:07112384788"
            title="Call us"
          >
            <Icons.phone size={15} />
            Call Us
          </AnchorLink>
        </div>
      </div>
    </header>
  );
}

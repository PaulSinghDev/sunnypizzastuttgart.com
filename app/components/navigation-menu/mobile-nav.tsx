import { AnchorLink } from "../ui/anchor-link";
import { Icons } from "../ui/icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import navLinks from "./nav-links.json";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="ml-auto cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded-md p-3 transition-all duration-300">
        <Icons.burger size={24} />
      </SheetTrigger>
      <SheetContent className="h-full flex flex-col">
        <SheetHeader>
          <div className="flex items-center gap-2">
            <AnchorLink
              href="/"
              title="Go to home page"
              className="flex items-center gap-2 w-full hover:no-underline"
            >
              <div className="font-bold bg-red-800 p-2 rounded-full w-[40px] h-[40px] ">
                <img
                  src="/assets/images/sunny-pizza-logo.png"
                  alt="Sunny Pizza Logo"
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <SheetTitle className="m-0 leading-none mb-1">
                  Sunny Pizza & Pinsa
                </SheetTitle>
                <SheetDescription className="m-0 leading-none text-muted-foreground font-light text-xs">
                  From India to Italy via Germany
                </SheetDescription>
              </div>
            </AnchorLink>
          </div>
        </SheetHeader>
        <div className="flex flex-col gap-2 mt-4 font-light mb-auto text-xl">
          {navLinks.map((link) => (
            <AnchorLink
              key={`${link.href}-${link.name}-nav-link-mobile`}
              className="font-light text-muted-foreground"
              href={link.href}
              title={link.title}
            >
              {link.name}
            </AnchorLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

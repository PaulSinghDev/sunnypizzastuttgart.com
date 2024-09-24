import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { AnchorLink } from "../ui/anchor-link";

export function NavigationMenu() {
  return (
    <div className="fixed h-nav top-0 left-0 w-full z-50 bg-background">
      <div className="px-6 py-2 h-full border-b border-gray-200 w-full">
        <div className="max-w-content h-full mx-auto flex items-center justify-between">
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
                <div className="m-0 leading-none mb-1 text-foreground text-sm">
                  Sunny Pizza & Pinsa
                </div>
                <div className="m-0 leading-none text-xs font-light text-muted-foreground">
                  From India to Italy via Germany
                </div>
              </div>
            </AnchorLink>
          </div>
          <div className="hidden md:block">
            <DesktopNav />
          </div>
          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
}

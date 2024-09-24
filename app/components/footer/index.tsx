import { AnchorLink } from "../ui/anchor-link";
import { Icons } from "../ui/icons";

export function Footer() {
  return (
    <footer className="px-8 py-12 text-white bg-gray-800">
      <div className="max-w-content mx-auto flex flex-col">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-8 self-center w-full justify-items-center">
          <div className="w-full">
            <h3 className="text-2xl mb-6">When We&apos;re Open</h3>
            <ol>
              <li className="flex gap-2">
                <small>Monday:</small>
                <em>Closed</em>
              </li>
              <li className="flex gap-2">
                <small>Tuesday:</small>
                <em>5pm to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Wednesday:</small>
                <em>5pm to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Thursday:</small>
                <em>5pm to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Friday:</small>
                <em>5pm to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Saturday:</small>
                <em>5pm to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Sunday:</small>
                <em>Midday to 11pm</em>
              </li>
              <li className="flex gap-2">
                <small>Holidays:</small>
                <em>Midday to 11pm</em>
              </li>
            </ol>
          </div>
          <div className="w-full">
            <h3 className="text-2xl mb-6">How to Find Us</h3>
            <ol className="flex flex-col gap-4">
              <li>
                <div>
                  <AnchorLink
                    href="tel:07112384788"
                    title="Call us"
                    className="flex gap-4"
                  >
                    <Icons.phone size={25} />
                    0711 - 2384 788
                  </AnchorLink>
                </div>
              </li>
              <li>
                <div>
                  <div className="flex gap-4">
                    <Icons.address size={25} />
                    Eugenstraße 12
                    <br /> 70182
                    <br /> Stuttgart-Mitte
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Sunny Pizza & Pinsa
          </div>
          <div className="text-center text-xs mt-4">
            Made by{" "}
            <AnchorLink
              href="https://paulsingh.dev"
              title="Paul Singh's website"
              rel="noopener noreferrer"
            >
              Paul Singh
            </AnchorLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

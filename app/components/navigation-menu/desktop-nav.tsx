import { AnchorLink } from "../ui/anchor-link";
import navLinks from "./nav-links.json";

export function DesktopNav() {
  return (
    <div className="px-6 py-2 h-full w-full">
      <div className="flex gap-4 font-light mb-auto text-lg">
        {navLinks.map((link) => (
          <AnchorLink
            key={`${link.href}-${link.name}-nav-link-desktop`}
            className="font-light text-muted-foreground"
            href={link.href}
            title={link.title}
          >
            {link.name}
          </AnchorLink>
        ))}
      </div>
    </div>
  );
}

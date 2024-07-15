import { AnchorLink } from "~/components/ui/anchor-link";
import { Icons } from "~/components/ui/icons";
import { cn } from "~/lib/utils";

export function CtaSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col max-w-content mx-auto p-8 w-full justify-center items-center",
        className
      )}
    >
      <div className="w-full flex-col md:flex-col-reverse text-center flex justify-center gap-y-16">
        <div className="w-full max-h-[400px]">
          <img
            src="/assets/images/waiting.jpg"
            alt=""
            className="w-full h-full object-cover max-h-[400px] rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-5xl">What Are You Waiting For?!</h2>
          <p className="text-xl mt-8 font-light">
            At this point you must be intrigued, hungry or, possibly, a bit
            offended by the prospect of mixing two completely different cuisines
            which originate on different sides of the planet. Well, there&apos;s
            only one way to find out what you have been missing and that is to
            go ahead and order some food!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <AnchorLink
              className="grow text-white min-w-[150px] max-w-[200px] bg-slate-800 inline-flex gap-2 items-center"
              size={"md"}
              variant={"button"}
              href="/"
              title=""
            >
              <Icons.menu size={15} />
              View Menu
            </AnchorLink>
            <AnchorLink
              size={"md"}
              variant={"button"}
              className="grow bg-slate-800 text-white min-w-[150px] max-w-[200px] inline-flex gap-2 items-center"
              href="/"
              title=""
            >
              <Icons.phone size={15} />
              Call Us
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "~/lib/utils";

export function HomeIntroSection({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "max-w-content p-8 mx-auto flex flex-col-reverse md:flex-row  gap-x-20 gap-y-10 justify-center w-full",
        className
      )}
    >
      <div className="grow w-full">
        <h2 className="text-4xl text-pretty lg:text-5xl">
          Italian Tradition, Meet Indian Spices
        </h2>
        <p className="text-xl mt-8 font-light">
          Combining the rich traditions of Italian cuisine with the fragrant
          spices of India, we specialise in a variety of classical favourites
          such as Pizza, Pinsa and Pasta, all with an Indian twist. Love Punjabi
          Butter Paneer but fancy a cheesy pizza? Don&apos;t worry, we got you.
        </p>
      </div>
      <div className="grow w-full rounded-lg overflow-hidden shadow-md">
        <img
          className="h-[200px] md:max-h-[400px] md:h-[400px] object-cover object-center w-full"
          src="/assets/images/pizzas.jpg"
          alt="A pizza in front of a lit fire"
        />
      </div>
    </div>
  );
}

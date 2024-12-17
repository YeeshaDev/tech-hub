import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import { eventImages } from "@/constants/constants";


const firstRow = eventImages.slice(0, eventImages.length / 2);


const ReviewCard = ({
  img,
  name,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[350px] w-full max-w-[600px] cursor-pointer overflow-hidden rounded-xl"
      )}
    >
        <img className="rounded-lg object-cover w-full h-full" width="32" height="32" alt={name} src={img} />
    </figure>
  );
};

export function EventShowcase() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-sm">
      <Marquee pauseOnHover className="[--duration:20s]">
        {eventImages.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
     
      <div className="pointer-events-none absolute inset-y-0"></div>
      <div className="pointer-events-none absolute inset-y-0 "></div>
    </div>
  );
}
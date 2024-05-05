import IntroductionCard from "@/components/introduction-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <div className="w-full h-[calc(100vh-5rem)] flex flex-col justify-center space-y-5">
        <div className="h-1/5 flex flex-col justify-end">
          <span className="text-3xl font-bold">
            Hello, I am Marshal Nguyen - a Software Engineer
          </span>
          <div>
            I am currently a senior SE and have been working in the industry for
            10 years now.
          </div>
        </div>
        <div className="w-full h-3/5 flex justify-center">
          <Carousel className="w-full max-w-[900px] h-fit">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center items-center">
                    <IntroductionCard />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-5rem)] bg-accent flex flex-col justify-center space-y-5">
        <div className="h-1/5 flex flex-col justify-end">
          <span className="text-3xl font-bold">
            <h2>Here are my projects</h2>
          </span>
        </div>
      </div>
    </>
  );
}

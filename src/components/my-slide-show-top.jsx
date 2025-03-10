"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_SLIDE_URL } from "@/config/env";
import Autoplay from "embla-carousel-autoplay";

const MySlideShowTop = ({ className, topSlides }) => {
  return (
    <div className={className}>
      {topSlides.length > 0 && (
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{ align: "start", loop: false }}
        >
          <CarouselContent>
            {topSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Link href={slide.link || "#"}>
                  <Image
                    className={`w-full object-cover transition-all duration-500 ${
                      slide.link
                        ? "hover:scale-95 border-primary hover:border-2"
                        : ""
                    }`}
                    width={1050}
                    height={300}
                    src={IMAGE_SLIDE_URL + "thumb/" + slide.image}
                    alt={slide.name}
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-none max-md:hidden" />
          <CarouselNext className="rounded-none max-md:hidden" />
        </Carousel>
      )}
    </div>
  );
};

export default MySlideShowTop;

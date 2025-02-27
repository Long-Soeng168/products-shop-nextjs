import React from "react";
import { getLocale } from "next-intl/server";
import { getBrands } from "@/services/brands-services";
import MyBrandCard from "./ui/my-brand-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const MyProductsList = async ({ showNavigateButton = true }) => {
  const locale = await getLocale();
  const results = await getBrands();
  const brands = results.data;
  return (
    <div className="mb-8">
      {brands?.length > 0 && (
        <Carousel>
          <CarouselContent className="p-4">
            {brands?.map((brand, index) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 xl:basis-1/6"
                key={brand.id}
              >
                <MyBrandCard brand={brand} locale={locale} key={brand.id} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {showNavigateButton && (
            <div className="flex justify-end gap-2 px-4">
              <CarouselPrevious className="static top-1/1 -translate-y-1/1" />
              <CarouselNext className="static top-1/1 -translate-y-1/1" />
            </div>
          )}
        </Carousel>
      )}
    </div>
  );
};

export default MyProductsList;

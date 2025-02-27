import { IMAGE_BRAND_URL, IMAGE_CATE_URL } from "@/config/env";
import Image from "next/image";
import Link from "next/link";

const MyBrandCard = async ({ brand, locale }) => {
  return (
    <>
      <Link href={`/products?brandId=${brand.id}&brand=${brand.name}`}>
        <div className="relative flex flex-col items-center justify-center h-full p-2 py-6 overflow-hidden duration-300 bg-white border rounded-lg cursor-pointer group dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700 hover:-translate-x-2 hover:-translate-y-2 transition-all hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
          <div className="z-50">
            <Image
              className={`aspect-square object-contain bg-white p-0.5 dark:bg-white rounded-sm`}
              width={60}
              height={60}
              src={IMAGE_BRAND_URL + brand.image}
              alt=""
            />
          </div>
          <div className="z-50 mt-4">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              {locale == "kh" ? brand.name_kh : brand.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {brand.books_count
                ? brand.books_count +
                  `+ ${locale == "kh" ? "ផលិតផល" : "Products"}`
                : ""}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MyBrandCard;

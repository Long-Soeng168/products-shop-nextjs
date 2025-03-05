import { IMAGE_LINK_URL } from "@/config/env";
import Image from "next/image";

const MySocialLinkCardProductDetail = ({ image, link, title }) => {
  return (
    <>
      <a
        href={link}
        className="px-4 py-2 flex items-center gap-2 rounded-md border border-border border-black bg-background text-foreground text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:-translate-x-1 hover:-translate-y-1 transition duration-200"
      >
        <Image
          width={50}
          height={50}
          alt={title}
          src={IMAGE_LINK_URL + image}
        />
        <span>
          <p>Order With</p>
          {title}
        </span>
      </a>
    </>
  );
};

export default MySocialLinkCardProductDetail;

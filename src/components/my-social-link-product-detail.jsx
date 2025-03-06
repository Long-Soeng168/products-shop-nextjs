import { getFooter } from "@/services/footer-services";
import { getLinks } from "@/services/links-services";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { BookText, InfoIcon, Newspaper, PhoneCall } from "lucide-react";
import InstallPWAButton from "./InstallPWAButton";
import MySocialLinkCardProductDetail from "./ui/my-social-link-card-product-detail";

const MySocialLinkProductDetail = async () => {
  const t = await getTranslations("Index");
  const locale = await getLocale();
  const footer = await getFooter();
  const links = await getLinks(1);
  return (
    <div className="w-full py-4 border-t">
      {links?.length > 0 && (
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {links?.map((item) => (
            <MySocialLinkCardProductDetail
              image={item.image}
              title={item.name}
              link={item.link}
              key={item.id}
            />
          ))}
          <li></li>
        </ul>
      )}
    </div>
  );
};

export default MySocialLinkProductDetail;

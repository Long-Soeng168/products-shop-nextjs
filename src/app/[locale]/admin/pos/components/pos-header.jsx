import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ListChecksIcon, ListEnd } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import POSHeaderMenu from "./pos-header-menu";
import POSSearch from "./pos-search";
import OrderButton from "./order-button";
import { Holds } from "./holds";
import { ModeToggle } from "@/components/mode-toggle";
import { APP_NAME, APP_NAME_KH } from "@/config/website-detail";

const POSHeader = ({ customers, payments }) => {
  return (
    <>
      <header>
        {/* Logo */}
        <div className="flex flex-wrap items-center justify-between gap-2 p-2">
          <div className="flex items-center justify-center flex-1 order-2 gap-4 ">
            <div className="items-center hidden gap-2 mr-8 md:flex">
              <POSHeaderMenu />
              <Link href={`/`}>
                <p className="text-base font-bold max-w-26 text-primary">
                  {APP_NAME_KH}
                </p>
                <p className="text-sm font-semibold max-w-26 text-primary">
                  {APP_NAME}
                </p>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1">
              <form className="relative w-full ">
                <div className="flex items-stretch bg-background border-[0.5px] border-primary rounded-lg">
                  {/* <Select defaultValue="products">
                    <SelectTrigger className="w-auto h-full py-3 font-semibold border-none rounded-lg outline-none focus:ring-0">
                      <SelectValue placeholder="Item Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="products">Products</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                    </SelectContent>
                  </Select> */}
                  <POSSearch />
                </div>
              </form>
            </div>
          </div>

          <div className="flex items-center justify-between w-full gap-2 md:w-auto md:order-3">
            <div className="flex items-center gap-2 mr-8 md:hidden">
              <POSHeaderMenu />
              <Link href={`/`}>
                <p className="text-base font-bold max-w-26 text-primary">
                  {APP_NAME_KH}
                </p>
                <p className="text-sm font-semibold max-w-26 text-primary">
                  {APP_NAME}
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Holds />
              <OrderButton customers={customers} payments={payments} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default POSHeader;

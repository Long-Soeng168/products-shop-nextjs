import MySlideShow from "@/components/my-slide-show";
import MyCategoryList from "@/components/my-category-list";
import MyFeatureList from "@/components/my-feature-list";
import NewArrivals from "@/components/homepage/new-arrivals";
import BestSellings from "@/components/homepage/best-sellings";
import Promotion from "@/components/homepage/promotion";
import Blogs from "@/components/homepage/blogs";
import { APP_URL } from "@/config/env";
import ScrollToTop from "@/components/scroll-to-top";
import {
  APP_DESCRIPTION,
  APP_KEYWORD,
  APP_LOGO,
  APP_TITLE,
} from "@/config/website-detail";
import InstallPWAButton from "@/components/InstallPWAButton";
import { Toaster } from "@/components/ui/toaster";
import MyEndlestScroll from "@/components/my-endless-scroll";
import MyEndlessScrollBrands from "@/components/my-endless-scroll-brands";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";

export const metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORD,
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    url: APP_URL, // replace with the actual Thnal URL
    type: "website",
    images: [
      {
        url: APP_LOGO, // replace with the actual image URL
        width: 500,
        height: 500,
        alt: APP_TITLE,
      },
    ],
  },
  twitter: {
    card: APP_LOGO,
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div>
      <ScrollToTop />

      <MySlideShow className="px-4 mt-2 mb-8" />

      <MyCategoryList key="category-list-key" className="px-4" />

      <MyEndlessScrollBrands />

      <div className="px-4">
        <NewArrivals />

        <BestSellings />

        <Promotion />

        {/* <div className="max-w-screen-xl mx-auto mb-20 space-y-4">
  <MyHeading title="Partners" />
  <MyPartnerList />
</div> */}

        <Blogs />

        <MyFeatureList className="my-16" />
      </div>
      {/* <MyEndlestScroll /> */}
      <Toaster />
    </div>
  );
}

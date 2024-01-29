import { Metadata } from "next";
import TitlePage from "@/components/Pages/TitlePage";
import OurWorksPage from "@/components/Pages/OurWorksPage";
import About from "@/components/Pages/AboutPage";
import Brands from "@/components/Pages/BrandsPage";

export const metadata: Metadata = {
  title: "Главная",
  icons: {
    icon: "/icon.svg",
  },
};

export default function Home() {
  return (
    <div>
      <TitlePage />
      <About />
      <OurWorksPage />
      <Brands />
    </div>
  );
}

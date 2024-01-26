import { Metadata } from "next";
import TitlePage from "@/app/TitlePage";
import OurWorksPage from "@/app/OurWorksPage";
import About from "@/app/About";
import Brands from "@/app/Brands";

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
      <Brands/>
    </div>
  );
}

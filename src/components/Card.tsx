import Image from "next/image";
import { Work } from "@/types/work";

type CardProps = {
  work: Work;
};

export default function Card({ work }: CardProps) {
  return (
    <div className={"relative"}>
      <div
        className={
          "w-full h-full border border-gold absolute bottom-3 left-3 z-0"
        }
      ></div>
      <Image
        width={300}
        height={180}
        src={work.imageSrc}
        alt={"Работа"}
        className={
          "relative z-1 hover:transform hover:translate-x-3 hover:translate-y-[-0.75rem] transition-all"
        }
      />
    </div>
  );
}

import Image from "next/image";
import {Work} from "@/types/work";

type CardProps = {
  work: Work
};

export default function Card({work}: CardProps) {
  return (
    <div className={'relative'}>
      <div className={'w-full h-full border border-gold absolute bottom-5 left-5 z-0'}></div>
      <Image width={300} height={180} src={work.imageSrc} alt={"Работа"} className={'relative z-1'}/>
    </div>
  );
}
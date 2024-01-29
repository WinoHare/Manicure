import { PriceBlock } from "@/types/price";
import Image from "next/image";
import PriceItem from "@/components/PriceItem";

export default function PriceBlock({ imageSrc, alt, prices }: PriceBlock) {
  return (
    <div className={"flex even:flex-row-reverse w-full justify-between mb-10 content-center"}>
      <Image
        src={imageSrc}
        alt={alt}
        width={1080}
        height={1080}
        className={"w-[45%] h-fit"}
      />
      <div className={"w-[45%] flex flex-col justify-evenly"}>
        {prices.map((price, i) => (
          <PriceItem title={price.title} cost={price.cost} key={i} />
        ))}
      </div>
    </div>
  );
}

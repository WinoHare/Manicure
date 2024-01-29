import { priceBlocks } from "@/mocks/prices";
import PriceBlock from "@/components/PriceBlock";

type PriceProps = {};

export default function Price({}: PriceProps) {
  return (
    <div className={"odd:flex-row-reverse "}>
      <h2
        className={"font-Gara font-bold text-white text-4xl text-center mb-10"}
      >
        Цены на услуги
      </h2>
      <div className={"first:bg-gold"}>
        {priceBlocks.map((priceBlock, i) => (
          <PriceBlock
            imageSrc={priceBlock.imageSrc}
            alt={priceBlock.alt}
            prices={priceBlock.prices}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

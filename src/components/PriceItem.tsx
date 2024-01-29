import {Price} from "@/types/price";

export default function PriceItem({ title, cost }: Price) {
  return (
    <div className={"flex border-b border-b-white justify-between  pb-3 mb-5 w-full"}>
      <p className={"inline-block font-CormGara font-bold text-white text-xl"}>
        {title}
      </p>
      <p className={"inline-block font-CormGara font-bold text-white text-xl"}>
        {cost} ₽
      </p>
    </div>
  );
}
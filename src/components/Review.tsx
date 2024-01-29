import Image from "next/image";
import { Review } from "@/types/review";

type ReviewProps = {
  review: Review;
};

export default function Review({ review }: ReviewProps) {
  return (
    <div className={"flex odd:flex-row-reverse mb-10 items-center justify-between"}>
      <Image
        src={review.imageSrc}
        alt={`Изображение от ${review.name}`}
        width={500}
        height={500}
        className={'rounded-full w-60 h-60 min-w-60 min-h-60 max-w-60 max-h-60 object-cover'}
      />
      <div className={'w-[calc(100%-20rem)]'}>
        <h3 className={"font-CormGara font-bold text-white text-2xl mb-3"}>
          {review.name}
        </h3>
        <p className={"font-CormGara text-white text-xl"}>{review.text}</p>
      </div>
    </div>
  );
}
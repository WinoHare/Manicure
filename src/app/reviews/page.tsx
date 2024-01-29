import {priceBlocks} from "@/mocks/prices";
import {reviews} from "@/mocks/reviews";
import Review from "@/components/Review";

export default function Reviews() {
	return (
		<div className={"odd:flex-row-reverse "}>
			<h2
				className={"font-Gara font-bold text-white text-4xl text-center mb-10"}
			>
				Отзывы
			</h2>
			<div className={"first:bg-gold"}>
				{reviews.map((review, i) => (
					<Review review={review} key={i}/>
				))}
			</div>
		</div>
	);;
}
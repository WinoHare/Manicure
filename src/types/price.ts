export interface Price {
	title: string
	cost: number
}

export interface PriceBlock {
	imageSrc: string
	alt: string
	prices: Price[]
}

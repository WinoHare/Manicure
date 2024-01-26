'use client'

import {InfinitySpin} from "react-loader-spinner";

type loadingProps = {}

export default function loading({}: loadingProps) {
	return <InfinitySpin
		width="200"
		color="#FFFFFF"
	/>;
}
'use client'

import {InfinitySpin} from "react-loader-spinner";

type loadingProps = {}

export default function Loading({}: loadingProps) {
	return <p className={'text-white'}>Loading...</p>;
}
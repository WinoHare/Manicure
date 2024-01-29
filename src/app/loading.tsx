"use client";

import {CircleLoader} from "react-spinners";

type loadingProps = {};

export default function Loading({}: loadingProps) {
  return <div className={"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"}>
    <CircleLoader color={'#FFF'}/>
  </div>;
}

import { brands } from "@/mocks/brands";
import Image from "next/image";

type BrandsProps = {};

export default function Brands({}: BrandsProps) {
  return (
    <div className={"mt-20 mr-60 ml-60 flex justify-evenly"}>
      {brands.map((brand) => (
        <Image
          src={brand.imageSrc}
          alt={brand.name}
          width={100}
          height={100}
          key={brand.name}
          className={"max-w-[100px] max-h-[100px] opacity-70"}
        />
      ))}
    </div>
  );
}
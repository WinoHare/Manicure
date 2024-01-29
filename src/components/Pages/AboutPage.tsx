import Image from "next/image";

type AboutProps = {};

export default function AboutPage({}: AboutProps) {
  return (
    <div className={"mt-16 flex flex-col items-center"}>
      <Image
        src={"/quote.svg"}
        alt={"Кавычка"}
        width={64}
        height={64}
        className={"mb-16"}
      />
      <div className={"flex justify-between w-full items-center"}>
        <p className={"font-CormGara text-white text-lg inline-block w-[40rem]"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh
          vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan
          risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis
          tristique. Viverra augue lorem ut quisque quam tortor, malesuada
          iaculis. Et elementum at nulla venenatis, faucibus integer. Auctor
          neque eros, viverra rutrum. Fames ultrices condimentum tortor nec
          penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.
        </p>
        <Image
          src={"/mocks/photo.jpg"}
          alt={"Фото"}
          height={300}
          width={300}
          className={"rounded-full w-60 h-60 min-w-60 min-h-60 max-w-60 max-h-60 object-cover"}
        />
      </div>
    </div>
  );
}

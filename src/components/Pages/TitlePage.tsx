import Image from "next/image";

type TitlePageProps = {};

export default async function TitlePage({}: TitlePageProps) {
  return (
    <div
      className={"bg-[url(/bgc.jpg)] bg-cover h-screen grid grid-rows-[9fr_1fr] -mt-32 -ml-60 -mr-60"}
    >
      <h1
        className={
          "font-Gara text-white text-6xl font-bold self-center text-center"
        }
      >
        Студия маникюра
      </h1>
      <div className={"flex justify-center items-center gap-2"}>
        <Image
          src={"/scroll-down.svg"}
          alt={"Прокрутите вниз"}
          width={20}
          height={30}
        />
        <p className={"font-CormGara font-bold text-md text-white"}>
          Прокрутите вниз
        </p>
      </div>
    </div>
  );
}



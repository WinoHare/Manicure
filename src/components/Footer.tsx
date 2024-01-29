import Image from "next/image";
import IconLink from "@/components/IconLink";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer>
      <div
        className={
          "border-t-white border-b-white border-b border-t opacity-70 pb-12 pt-12 mr-60 ml-60 mb-4 flex justify-between flex-grow-0 flex-shrink-0 basis-auto"
        }
      >
        <Image src={"/icon.svg"} alt={"Логотип"} height={50} width={50} />
        <div className={"w-64"}>
          <h3 className={"font-Gara font-bold text-white text-lg"}>Контакты</h3>
          <p className={"font-CormGara text-white text-md"}>8 800 1000 800</p>
          <p className={"font-CormGara text-white text-md"}>
            г. Великий Устюг ул. Пушкина д. Калатушкина кв. 9
          </p>
        </div>
        <div className={"w-64"}>
          <h3 className={"font-Gara font-bold text-white text-lg"}>
            Я в социальных сетях
          </h3>
          <div className={'flex gap-2'}>
            <IconLink
              to={"/"}
              src={"/instagram.svg"}
              alt={"Инстаграм"}
              width={25}
              height={25}
            />
            <IconLink
              to={"/"}
              src={"/vk.png"}
              alt={"Инстаграм"}
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

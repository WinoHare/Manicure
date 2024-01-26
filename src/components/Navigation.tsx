import IconLink from "@/components/IconLink";
import NavLink from "@/components/NavLink";

type NavigationProps = {};

export default function Navigation({}: NavigationProps) {
  return (
    <div className="absolute flex justify-between pt-4 pb-4 border-b border-b-white items-center mr-60 ml-60  w-[calc(100%-30rem)] z-50">
      <IconLink
        to={"/"}
        src={"/icon.svg"}
        alt={"Логотип"}
        height={50}
        width={50}
      />
      <NavLink to={"/"}>Главная</NavLink>
      <NavLink to={"/works"}>Работы</NavLink>
      <NavLink to={"/price"}>Прайс</NavLink>
      <NavLink to={"/contacts"}>Контакты</NavLink>
      <IconLink
        to={"/"}
        src={"/sign-up.png"}
        alt={"Логотип"}
        height={40}
        width={40}
        title={'Записаться'}
      />
    </div>
  );
}
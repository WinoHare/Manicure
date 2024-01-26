import { works } from "@/mocks/works";
import Card from "@/components/Card";

type OurWorksPageProps = {};

export default function OurWorksPage({}: OurWorksPageProps) {
  return (
    <div className={" mt-20 mr-60 ml-60 pr-5"}>
      <h2 className={"font-Gara text-white text-4xl text-center mb-24"}>
        Мои работы
      </h2>
      <div className={'flex gap-10 flex-wrap justify-between'}>
        {works.map((work) => (
          <Card work={work} key={work.imageSrc} />
        ))}
      </div>
    </div>
  );
}
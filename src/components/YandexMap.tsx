import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { Suspense } from "react";
import Loading from "@/app/contacts/loading";

type MapProps = {};

export default function YandexMap({}: MapProps) {
  return (
    <Suspense fallback={<Loading />}>
      <YMaps>
        <Map
          defaultState={{ center: [56.837244, 60.597647], zoom: 14 }}
          width={100}
          height={"100%"}
          className={"w-full, h-[500px] grayscale-[30%]"}
        >
          <Placemark defaultGeometry={[56.837244, 60.597647]} />
        </Map>
      </YMaps>
    </Suspense>
  );
}

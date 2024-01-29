"use client";
import YandexMap from '@/components/YandexMap'

type ContactsProps = {};

export default function Contacts({}: ContactsProps) {
  return (
    <div>
      <h2
        className={"font-Gara font-bold text-white text-4xl text-center mb-10"}
      >
        Контакты
      </h2>
      <YandexMap/>
    </div>
  );
}

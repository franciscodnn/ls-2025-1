import Image from "next/image";

import { InvestmentCard } from "@/components/InvestmentCard";

import { investments } from "@/data/db";

export default function Home() {
  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      <h1 className="text-center text-2xl my-12 font-bold">Investimentos</h1>
      <div className="investments grid grid-cols-3 gap-3">
        {
          investments.map(
            (objetoJS) => (
              <InvestmentCard
                key={objetoJS.id}
                name={objetoJS.name}
                value={objetoJS.value}
                origin={objetoJS.origin}
                category={objetoJS.category}
                date={objetoJS.date}
                interest={objetoJS.interest}
              />
            )
          )
        }
      </div>
    </div>
  );
}

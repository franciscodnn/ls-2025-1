import Image from "next/image";
import { soma } from "@/lib/utils";

export default function Home() {
  const resultado = soma(10, 20);
  const investment = {
    id: 'b9f2414d-b8dd-484d-8179-83383d10a3fd',
    name: 'Tesouro Selic 2029',
    value: 10050,
    origin: 'Tesouro Nacional',
    category: 'Pós',
    created_at: '2023-08-22T00:00:00-03:00',
    interest: '100% Selic',
  };

  return (
    <>
      <h2>Home</h2>
    </>
    
  );
}

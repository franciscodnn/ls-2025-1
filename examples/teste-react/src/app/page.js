"use client"

import Image from "next/image";
import { useState } from "react";
import { soma } from "@/lib/utils";
import Header from '@/component/header';

export default function Home() {
  const resultado = soma(10, 20);
  
  // state
  const [qtdClique, setQtdClique] = useState(0); // hooks

  function handleClick() {
    setQtdClique(qtdClique + 1);
  }

  return (
    <>
      <Header title="Área do Administrador" attr="teste" />
      <h2 className="text-center">Home</h2>      
      <hr />
      <p># cliques: { qtdClique }</p>
      <button 
        className="rounded-full border-1 px-2"
        onClick={handleClick}
      >Clicar</button>
    </>
    
  );
}

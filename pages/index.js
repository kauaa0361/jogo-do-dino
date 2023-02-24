import { createContext,useContext,useState } from "react";

import { Button } from "@/components/button";
import { Dino } from "@/components/dino";
import { CactusComponent,CreateCactus } from "@/components/cactus";


export default function Home() {

  return (
    <>
      <Dino/>
      <Button/>
      <CactusComponent/>
    </>
  )
}

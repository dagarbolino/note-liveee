"use client"

import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Palette } from "lucide-react";
import { ToggleColorBg } from "./ToggleColorBg";



export default function SheetLayout() {


  return (
    <Sheet>
      <SheetTrigger
        className="border rounded-lg py-2 px-4 text-sm hover:bg-gray-800 transition duration-200 cursor-pointer">
        Layout
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle
            className="text-xl font-bold text-center"
          >Liste des options proposé</SheetTitle>
          <SheetDescription>
            Personnalisez votre curriculum en sélectionnant parmi nos options sur mesure.
          </SheetDescription>


          <SheetTitle className="py-6 flex flex-row items-center gap-2">
            <Palette /> Gamme de couleurs pour la page
          </SheetTitle>
          <SheetDescription>
            <Card className="border-2 border-orange-500">
              <ToggleColorBg />
            </Card>
          </SheetDescription>

          <SheetTitle className="py-6 flex flex-row items-center gap-2">
            <Palette /> Gamme de couleurs le texte
          </SheetTitle>

          <SheetDescription>
            <Card className="border-2 border-orange-500">
              <ToggleColorBg />
            </Card>
          </SheetDescription>




        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
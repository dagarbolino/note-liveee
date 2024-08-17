"use client"

import { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ButtonHooby from "./curriculums/ButtonHooby"
import ButtonContact from "./curriculums/ButtonContact"

export default function SheetCurriculum() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>Add features</SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Ajouter des fonctionnalités</SheetTitle>
          <SheetDescription>
            Choisissez les éléments à ajouter à votre curriculum.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <ButtonContact onClose={handleClose} />
          <ButtonHooby onClose={handleClose} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

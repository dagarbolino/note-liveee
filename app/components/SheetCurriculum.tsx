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


interface SheetCurriculumProps {
  curriculumId: string;
}

export default function SheetCurriculum({ curriculumId }: SheetCurriculumProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>Add features</SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Liste des fonctionnalités</SheetTitle>
          <SheetDescription>
            Choisissez les éléments pour mettre à jour à votre curriculum.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex flex-col">
        <ButtonContact onClose={handleClose} curriculumId={curriculumId} />
        <ButtonHooby onClose={handleClose} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

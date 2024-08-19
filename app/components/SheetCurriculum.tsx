"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from 'react'
import ButtonContact from "./curriculums/ButtonContact"
import ButtonHooby from "./curriculums/ButtonHooby"
import ButtonSkill from "./curriculums/ButtonSkill"


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
          <ButtonHooby onClose={handleClose} curriculumId={curriculumId} />
          <ButtonSkill onClose={handleClose} curriculumId={curriculumId} />
        </div>
      </SheetContent>
    </Sheet>
  )
}

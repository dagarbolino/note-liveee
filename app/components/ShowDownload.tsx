"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


interface PreviewsProps {
  curriculumId: string
}

export function ShowDownload({ curriculumId }: PreviewsProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show download</Button>
      </AlertDialogTrigger>


      <AlertDialogContent>

        <p> mettre ici le preview depuis des composant 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>




        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>


      </AlertDialogContent>
    </AlertDialog>
  )
}


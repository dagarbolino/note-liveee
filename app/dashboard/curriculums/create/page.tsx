import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createCurriculum } from "@/lib/actionsCurriculums"

import Link from "next/link"

export default function CreatePage() {
  return (
    <Card>
      <form action={createCurriculum}>
        <CardHeader>
          <CardTitle>Créer un curriculum</CardTitle>
          <CardDescription>Quelques lignes pour vous démarquer</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5">
          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="title">Titre</Label>
            <Input type="text" name="title" id="title" required placeholder="Titre de votre curriculum" />
          </div>

          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="description">Description</Label>
            <Textarea name="description" id="description" required placeholder="Description de votre curriculum" />
          </div>


          <div className="gap-y-2 flex flex-col">
            <Label htmlFor="completed">En attente || Complet</Label>
            <Input type="checkbox" name="completed" id="completed" className="w-6 cursor-pointer" />
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <Button type="button" className="bg-red-500 hover:bg-red-600 text-white">
            <Link href="/dashboard/curriculums">Annuler</Link>
          </Button>

          <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
            Créer un curriculum
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

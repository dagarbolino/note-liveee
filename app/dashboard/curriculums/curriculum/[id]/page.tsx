import { Previews } from "@/app/components/Preview"
import SheetCurriculum from "@/app/components/SheetCurriculum"
import SheetLayout from "@/app/components/SheetLayout"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { Textarea } from "@/components/ui/textarea"
import { getCurriculum, updateCurriculum } from "@/lib/actionsCurriculums"

import Link from "next/link"

interface Params {
  id: string
}

interface UpdatePageProps {
  params: Params
}

export default async function PageCurriculum({ params }: UpdatePageProps) {
  const curriculum = await getCurriculum(params.id)

  return (
    <>
      <div className="flex flex-row justify-between gap-y-5 w-full">

        <div className="">
          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <SheetCurriculum curriculumId={params.id} />
          </div>
          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <SheetLayout />
          </div>
        </div>



        <div className="">
          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <Previews curriculumId={params.id} />
          </div>
          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <Button variant="outline">Download PDF</Button>
          </div>

        </div>
      </div>
      <Card>
        <form action={updateCurriculum}>
          <Input type="hidden" name="id" value={curriculum?.id || ''} />

          <CardHeader>
            <CardTitle>Modifier un curriculum</CardTitle>
            <CardDescription>Mettez à jour vos informations</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-5 w-full">


            <div className="gap-y-2 flex flex-col w-60">
              <Label className=" " htmlFor="title">Titre</Label>
              <Input className=" " defaultValue={curriculum?.title || ''} type="text" name="title" id="title" required />
            </div>

            <div className="gap-y-2 flex flex-col w-60">
              <Label htmlFor="description">Description</Label>
              <Textarea defaultValue={curriculum?.description || ''} name="description" id="description" required />
            </div>


            <div className="gap-y-2 flex flex-col w-60">
              <Label htmlFor="completed">En attente || Complet</Label>
              <Input defaultChecked={curriculum?.completed || false} type="checkbox" name="completed" id="completed" className="w-6 cursor-pointer" />
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <Button type="button" className="bg-red-500 hover:bg-red-600 text-white">
              <Link href="/dashboard/curriculums">Annuler</Link>
            </Button>

            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
              Modifier le curriculum
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}

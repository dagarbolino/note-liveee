import SheetCurriculum from "@/app/components/SheetCurriculum"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"
import { getAllCurriculums, getCurriculum, updateCurriculum } from "@/lib/actionsCurriculums"
import { getUser } from "@/lib/actionsUsers"

import ListContactDetail from "@/app/service/ListContactDetail"
import ListExperience from "@/app/service/ListExperience"
import ListFormation from "@/app/service/ListFormation"
import ListHobby from "@/app/service/ListHobby"
import ListLanguage from "@/app/service/ListLanguage"
import ListSkill from "@/app/service/ListSkill"
import Motivation from "@/app/service/Motivation"
import Link from "next/link"

interface Params {
  id: string
}

interface UpdatePageProps {
  params: Params
}

export default async function PageCurriculum({ params }: UpdatePageProps) {
  const curriculum = await getCurriculum(params.id)
  const user = await getUser()
  const data = await getAllCurriculums(user?.id as string)

  return (
    <>
      <div className="flex flex-row justify-between gap-y-5 w-full">
        <div className="">
          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <SheetCurriculum curriculumId={params.id} />
          </div>

        </div>

        <div className="">
          <Dialog>
            <div className="mb-6 ml-6 border-r-4 border-orange-500 pl-6 w-auto">
              <DialogTrigger className="" asChild>
                <Button variant="outline" className="mr-6">Aperçu</Button>
              </DialogTrigger>
            </div>
            <DialogContent className="sm:max-w-[1024px] h-[90vh] overflow-y-auto">

              <div className="flex flex-row gap-4">
                <div className="w-1/5">

                  <div className="grid gap-4">
                    <ListContactDetail curriculumId={data[0]?.id} />
                  </div>

                  <div className="my-2 border border-b-gray-400"></div>

                  <div className="grid gap-4">
                    <ListHobby curriculumId={data[0]?.id} />
                  </div>

                  <div className="grid gap-4 ">
                    <ListSkill curriculumId={data[0]?.id} />
                  </div>

                  <div className="grid gap-4 ">
                    <ListLanguage curriculumId={data[0]?.id} />
                  </div>



                </div>

                <div className="my-2 border border-b-gray-400 "></div>

                <div className="flex flex-col gap-4 w-4/5">

                  <div className="grid gap-4 ">
                    <Motivation curriculumId={data[0]?.id} />
                  </div>

                  <div className="grid gap-4 ">

                    <ListFormation curriculumId={data[0]?.id} />
                  </div>

                  <div className="grid gap-4 ">
                    <ListExperience curriculumId={data[0]?.id} />
                  </div>


                </div>


              </div>
              <div className="flex justify-between">
                <Button variant="secondary">
                  <Link href="/dashboard/curriculums">Retour</Link>
                </Button>
                <Button variant="secondary">
                  <Link href={`/dashboard/curriculums/curriculum/${data[0]?.id}/preview`}>Modifier le style et download</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          
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
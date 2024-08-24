


import SheetCurriculum from "@/app/components/SheetCurriculum"
import SheetLayout from "@/app/components/SheetLayout"
import ListContactDetail from "@/app/service/ListContactDetail"
import ListExperience from "@/app/service/ListExperience"
import ListFormation from "@/app/service/ListFormation"
import ListHobby from "@/app/service/ListHobby"
import ListLanguage from "@/app/service/ListLanguage"
import ListSkill from "@/app/service/ListSkill"
import Motivation from "@/app/service/Motivation"
import { Button } from "@/components/ui/button"
import { getAllCurriculums } from "@/lib/actionsCurriculums"
import { getUser } from "@/lib/actionsUsers"
import Link from "next/link"



export default async function PageCurriculums({ params }: { params: { id: string } }) {

  const user = await getUser()
  const data = await getAllCurriculums(user?.id as string)

  return (
    <section className="grid items-start gap-y-8">
      <div className="flex md:items-center md:justify-between flex-col md:flex-row">


        <div className="">

          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <SheetLayout />
          </div>

          <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
            <Button className="mr-6" variant="outline">Download PDF</Button>
          </div>
        </div>


        <Button variant="outline" className="mb-4">
          <Link href="/dashboard/curriculums">Retour</Link>
        </Button>

      </div>


      <div className="border-2 border-white p-4 rounded-lg flex flex-col md:flex-row">


        <div className="w-1/5">
          <ListContactDetail curriculumId={data[0]?.id} />
          <ListHobby curriculumId={data[0]?.id} />
          <ListSkill curriculumId={data[0]?.id} />
          <ListLanguage curriculumId={data[0]?.id} />
        </div>

        <div className="border border-white mx-4"></div>

        <div className="w-4/5">
          <Motivation curriculumId={data[0]?.id} />
          <ListFormation curriculumId={data[0]?.id} />
          <ListExperience curriculumId={data[0]?.id} />
        </div>
      </div>



      <div className="">
      <Button variant="outline" className="mb-4">
          <Link href="/dashboard/curriculums">Retour</Link>
        </Button>
      </div>
    </section>
  )
}

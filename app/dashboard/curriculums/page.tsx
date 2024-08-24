import ButtonDeleteCurriculum from "@/app/components/ButtonDeleteCurriculum"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getAllCurriculums } from "@/lib/actionsCurriculums"
import { getUser } from "@/lib/actionsUsers"
import { FilePenLine } from "lucide-react"
import { File } from "lucide-react"
import Link from "next/link"



export default async function PageCurriculums() {

  const user = await getUser()
  const data = await getAllCurriculums(user?.id as string)



  return (
    <section className="grid items-start gap-y-8">
      <div className="flex md:items-center md:justify-between flex-col md:flex-row">
        <div className="grid gap-1">
          <h2 className="text-3xl uppercase font-black">curriculums</h2>
          <p className="text-lg text-muted-foreground ">Ne laissez pas vos compétences inaperçues, créez votre curriculum dès maintenant</p>
          <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>
        </div>

        <Button>
          <Link href="/dashboard/curriculums/create">Créer un curriculum</Link>
        </Button>

      </div>

      {data.length < 1 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-3">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-500 bg-opacity-20 mb-4">
            <File className="text-orange-900" />
          </div>
          <p className="text-lg text-white">Vous n&apos;avez aucun curriculums</p>
          <p className="text-muted-foreground text-sm">Commencez des maintenant à créer des curriculums via notre application</p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
            <Link href="/dashboard/curriculums/create">Créer un nouveau curriculum</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-4">
          {data?.map((item, index) => (
            <Card key={index} className="flex items-center justify-between p-4">
              <div>
                <h2 className="text-orange-500 text-xl font-bold">{item.title}</h2>
                <p className="text-muted-foreground text-sm">
                  écrit le {new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short' })
                    .format(new Date(item.createdAt))}
                </p>
                
              </div>
              <div className="flex items-center gap-2">
                <Button type="button" className="bg-yellow-500 hover:bg-yellow-600 mt-4 text-white mb-3">
                  <Link href={`curriculums/curriculum/${item.id}`}><FilePenLine className="w-4" /></Link>
                </Button>
                <ButtonDeleteCurriculum id={item.id} />
              </div>
            </Card>
          ))}
        </div>
      )}


      


    </section>
  )
}

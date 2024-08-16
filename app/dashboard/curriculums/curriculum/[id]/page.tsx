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

export default async function PageCurriculum({params}: UpdatePageProps) {
  const curriculum = await getCurriculum(params.id)

  return (


    

    <Card>
      <form action={updateCurriculum}>
        <Input type="hidden" name="id" value={curriculum?.id || ''} />
        
        <CardHeader>
          <CardTitle>Modifier un curriculum</CardTitle>
          <CardDescription>Mettez à jour vos informations</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-5 w-full">


          <div className="gap-y-2 flex flex-col w-60">
            <Label className=" "  htmlFor="title">Titre</Label>
            <Input className=" " defaultValue={curriculum?.title || ''} type="text" name="title" id="title" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="description">Description</Label>
            <Textarea defaultValue={curriculum?.description || ''} name="description" id="description" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="last_name">Nom</Label>
            <Input defaultValue={curriculum?.contact_details?.last_name || ''} type="text" name="last_name" id="last_name" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="first_name">Prénom</Label>
            <Input defaultValue={curriculum?.contact_details?.first_name || ''} type="text" name="first_name" id="first_name" required />
            </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="postTitle">Titre du poste</Label>
            <Input defaultValue={curriculum?.contact_details?.postTitle || ''} type="text" name="postTitle" id="postTitle" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="email">Email</Label>
            <Input defaultValue={curriculum?.contact_details?.email || ''} type="email" name="email" id="email" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="phone">Téléphone</Label>
            <Input defaultValue={curriculum?.contact_details?.phone || ''} type="tel" name="phone" id="phone" required />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input defaultValue={curriculum?.contact_details?.linkedin || ''} type="url" name="linkedin" id="linkedin" />
          </div>

          <div className="gap-y-2 flex flex-col w-60">
            <Label htmlFor="photoUrl">Photo URL</Label>
            <Input defaultValue={curriculum?.contact_details?.photoUrl || ''} type="url" name="photoUrl" id="photoUrl" />
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
  )
}

import SheetCurriculum from "@/app/components/SheetCurriculum"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getContact, updateContact } from "@/lib/actionsContact"

interface PageProps {
  params: { id: string }
}

export default async function PageContact({ params }: PageProps) {
  const curriculumId = params.id;
  const contactData = await getContact(curriculumId);

  return (
    <>
      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={curriculumId} />
      </div>

      <Card>

        <CardHeader>
          <CardTitle>Détails de contact </CardTitle>
          <CardDescription>Personnalisez votre profil professionnel en un clic !</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-y-5 w-full">
          <form action={updateContact}>
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="hidden" name="curriculumId" value={curriculumId} />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="text" name="last_name" defaultValue={contactData?.contact_details?.last_name || ''} placeholder="Last Name" required />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="text" name="first_name" defaultValue={contactData?.contact_details?.first_name || ''} placeholder="First Name" required />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="text" name="postTitle" defaultValue={contactData?.contact_details?.postTitle || ''} placeholder="Post Title" required />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="email" name="email" defaultValue={contactData?.contact_details?.email || ''} placeholder="Email" required />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="tel" name="phone" defaultValue={contactData?.contact_details?.phone || ''} placeholder="Phone" required />
            <Input className="gap-y-2 flex flex-col w-60 mt-3" type="url" name="linkedin" defaultValue={contactData?.contact_details?.linkedin || ''} placeholder="LinkedIn URL" />
            <Input className="gap-y-2 flex flex-col w-60 my-3" type="url" name="photoUrl" defaultValue={contactData?.contact_details?.photoUrl || ''} placeholder="Photo URL" />
            <Button type="submit">Mettre à jour les coordonnées</Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

import SheetCurriculum from "@/app/components/SheetCurriculum"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getContact, updateContact } from "@/lib/actionsContact"
import Link from "next/link"

interface PageProps {
  params: { id: string }
}

export default async function PageContact({ params }: PageProps) {
  const curriculumId = params.id;
  const contactData = await getContact(curriculumId);

  return (
    <>
      <div className='flex flex-col gap-y-5 h-full max-w-2xl'>
        <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
          <SheetCurriculum curriculumId={curriculumId} />
        </div>

        <div className="flex flex-row items-center justify-between gap-y-5">
          <div className="flex flex-col">
            <h1 className='text-2xl'>Détails de contact </h1>
            <h3 className='text-lg'>Personnalisez votre profil professionnel en un clic !</h3>
          </div>
          <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
            <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
          </Button>
        </div>

        <form action={updateContact} className="flex flex-col gap-y-2 w-full">
          <Input className="flex flex-col mt-3" type="hidden" name="curriculumId" value={curriculumId} />
          <Input className="flex flex-col mt-3" type="text" name="last_name" defaultValue={contactData?.contact_details?.last_name || ''} placeholder="Last Name" required />
          <Input className="flex flex-col mt-3" type="text" name="first_name" defaultValue={contactData?.contact_details?.first_name || ''} placeholder="First Name" required />
          <Input className="flex flex-col mt-3" type="text" name="postTitle" defaultValue={contactData?.contact_details?.postTitle || ''} placeholder="Post Title" required />
          <Input className="flex flex-col mt-3" type="email" name="email" defaultValue={contactData?.contact_details?.email || ''} placeholder="Email" required />
          <Input className="flex flex-col mt-3" type="tel" name="phone" defaultValue={contactData?.contact_details?.phone || ''} placeholder="Phone" required />
          <Input className="flex flex-col mt-3" type="url" name="linkedin" defaultValue={contactData?.contact_details?.linkedin || ''} placeholder="LinkedIn URL" />
          <Input className="flex flex-col my-3" type="url" name="photoUrl" defaultValue={contactData?.contact_details?.photoUrl || ''} placeholder="Photo URL" />
          <Button type="submit">Mettre à jour les coordonnées</Button>
        </form>


      </div>
    </>
  )
}

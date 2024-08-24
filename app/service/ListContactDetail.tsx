import { prisma } from "@/lib/db";

import Image from 'next/image';

export default async function ListContactDetail({ curriculumId }: { curriculumId: string }) {
  const Contact_details = await prisma.contact_details.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section>
      {Contact_details.length === 0 ? (
        <p className="text-sm">Aucune Compétance ajouté pour le moment.</p>
      ) : (
        <ul className="">
          {Contact_details.map((contact: { id: string; last_name: string; first_name: string; postTitle: string; photoUrl: string | null; email: string; linkedin: string | null; phone: string; curriculumsId: string }) => (
            <li key={contact.id}>
              <div className="gap-1 flex flex-col">
                <p className="text-2xl flex flex-col">{contact.first_name}</p>
                <p className="text-2xl flex flex-col mb-4">{contact.last_name}</p>

                <Image
                  src={contact.photoUrl || '/default-avatar.png'}
                  alt={`Photo of ${contact.first_name} ${contact.last_name}`}
                  width={80}
                  height={80}
                  className="text-sm flex flex-col w-32 h-36 border rounded-lg object-cover"
                />
                <p className="text-sm flex flex-col mt-2 mb-4"><span></span> {contact.postTitle}</p>
                <p className="text-sm flex flex-col mb-4 font-semibold"><span className="font-light">Email</span> {contact.email}</p>
                <p className="text-sm flex flex-col mb-4 font-semibold"><span className="font-light">Linkedin</span>{contact.linkedin}</p>

                <p className="text-sm flex flex-col mb-4"><span className="font-light">Téléphone: </span>{contact.phone}</p>

              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

import { prisma } from "@/lib/db";

export default async function HobbyList({ curriculumId }: { curriculumId: string }) {
  const hobbies = await prisma.hobby.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section className="my-4">
      <h2 className="text-lg font-bold ">Hobbies</h2>
      {hobbies.length === 0 ? (
        <p className="text-sm">Aucun hobby ajouté pour le moment.</p>
      ) : (
        <ul className="">
          {hobbies.map((hobby: { id: string; name: string }) => (
            <li key={hobby.id} className="">
              <p className="text-sm">- {hobby.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

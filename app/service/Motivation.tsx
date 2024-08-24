import { prisma } from "@/lib/db";

export default async function Motivation({ curriculumId }: { curriculumId: string }) {
  const Motivations = await prisma.motivation.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section className="p-4 w-auto">
      <div className="p-4 border-2 border-gray-300 rounded-md">
        {Motivations.length === 0 ? (
          <p className="text-sm">Aucune motivation ajouté pour le moment.</p>
        ) : (
          <ul className="">
            {Motivations.map((Motivation: { id: string; text_motivation: string }) => (
              <li key={Motivation.id} className="">
                <p className="text-sm">{Motivation.text_motivation}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

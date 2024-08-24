import { prisma } from "@/lib/db";

export default async function ListFormation({ curriculumId }: { curriculumId: string }) {
  const formations = await prisma.formation.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section>
      <h2 className="text-lg font-bold mt-4">Formation</h2>
      {formations.length === 0 ? (
        <p className="text-sm">Aucune formation ajouté pour le moment.</p>
      ) : (
        <ul className="p-2">
          {formations.map((formation: { id: string; title: string; description: string; business: string; startDate: Date; endDate: Date; location: string; }) => (
            <li key={formation.id} className="rounded-md p-2 border-2 border-gray-200  my-2">

              <div className="flex flex-row justify-start gap-6">
                <div>
                  <p className="text-sm font-light"><span>Du </span> 
                    {new Date(formation.endDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm font-light"><span>Au </span>
                    {new Date(formation.startDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm">{formation.title}</p>
                  <p className="text-sm">{formation.description}</p>
                  <p className="text-sm">Chez: {formation.business}</p>
                  <p className="text-sm">à: {formation.location.toUpperCase()}</p>
                </div>
              </div>
            </li>
          ))}
          </ul>
      )}
    </section>
  )
}

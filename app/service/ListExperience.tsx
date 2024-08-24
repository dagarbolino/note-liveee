import { prisma } from "@/lib/db";

export default async function ListExperience({ curriculumId }: { curriculumId: string }) {
  const experiences = await prisma.experience.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section>
      <h2 className="text-lg font-bold mt-4">Experience</h2>
      {experiences.length === 0 ? (
        <p className="text-sm">Aucune experience ajouté pour le moment.</p>
      ) : (
        <ul className="p-2">
          {experiences.map((experience: { id: string; title: string; description: string; business: string; startDate: Date; endDate: Date; location: string; }) => (
            <li key={experience.id} className="rounded-md p-2 border border-gray-300  my-2">

              <div className="flex flex-row justify-start gap-6">
                <div>
                  <p className="text-sm font-light"><span>Du </span> 
                    {new Date(experience.endDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-sm font-light"><span>Au </span>
                    {new Date(experience.startDate).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <div>
                  <p className="text-sm">{experience.title}</p>
                  <p className="text-sm">{experience.description}</p>
                  <p className="text-sm">Chez: {experience.business}</p>
                  <p className="text-sm">à: {experience.location.toUpperCase()}</p>
                </div>
              </div>
            </li>
          ))}
          </ul>

      )}
    </section>
  )
}

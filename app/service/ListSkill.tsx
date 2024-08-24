import { prisma } from "@/lib/db";

export default async function SkillList({ curriculumId }: { curriculumId: string }) {
  const skills = await prisma.skill.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section className="my-4">

      <h2 className="text-lg font-bold ">Compétances</h2>
      {skills.length === 0 ? (
        <p className="text-sm">Aucune Compétance ajouté pour le moment.</p>
      ) : (
        <ul className="">
          {skills.map((skill: { id: string; name: string }) => (
            <li key={skill.id} className="">
              <p className="text-sm">- {skill.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

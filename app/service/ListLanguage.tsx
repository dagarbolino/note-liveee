import { prisma } from "@/lib/db";

import { Star, StarHalf } from 'lucide-react';

export default async function ListLanguage({ curriculumId }: { curriculumId: string }) {
  const languages = await prisma.language.findMany({
    where: { curriculumsId: curriculumId },
  })

  return (
    <section className="my-4">

      <h2 className="text-lg font-bold ">Langues</h2>
      {languages.length === 0 ? (
        <p className="text-sm">Aucune language ajouté pour le moment.</p>
      ) : (
        <ul className="">
          {languages.map((language: { id: string; name: string; rating: number; curriculumsId: string }) => (
            <li key={language.id} className="">
              <div className="flex flex-row justify-between">
                <p className="text-sm">- {language.name}</p>
                <p className="text-sm flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < Math.floor(language.rating) ? (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      ) : index === Math.floor(language.rating) && language.rating % 1 !== 0 ? (
                        <StarHalf className="w-4 h-4 text-yellow-400 fill-current" />
                      ) : (
                        <Star className="w-4 h-4 text-gray-300" />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

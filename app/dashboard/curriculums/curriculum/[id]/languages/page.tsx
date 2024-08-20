import SheetCurriculum from '@/app/components/SheetCurriculum';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addLanguage, deleteLanguage, getLanguages, updateLanguage } from '@/lib/actionsLanguages';
import Link from "next/link";

export default async function CreateLanguages({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const languages = await getLanguages(curriculumId);

  return (
    <div className='flex flex-col gap-y-5 h-full'>
      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer une nouvelle langue</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>
      </div>

      <form action={addLanguage} className='flex flex-col gap-y-5'>
        <Input type="hidden" name="curriculumsId" value={curriculumId} />
        <Input type="text" name="name" placeholder="Enter language name" required />
        <Input type="number" name="rating" placeholder="Enter language rating (1-5)" min="1" max="5" required />
        <Button className='mt-5' type="submit">Ajouter une langue</Button>
      </form>

      <div className="border my-4"></div>

      <h2 className='text-2xl mb-10'>Gérer les langues</h2>

      <ul>
        {languages.map((language) => (
          <li key={language.id} className="flex items-center gap-2 mb-2">
            <form action={updateLanguage} className="flex items-center gap-2">
              <Input type="hidden" name="languageId" value={language.id} />
              <Input type="text" name="name" defaultValue={language.name} required />
              <Input type="number" name="rating" defaultValue={language.rating} min="1" max="5" required />
              <Button type="submit">Mettre à jour</Button>
            </form>
            <form action={deleteLanguage}>
              <Input type="hidden" name="languageId" value={language.id} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

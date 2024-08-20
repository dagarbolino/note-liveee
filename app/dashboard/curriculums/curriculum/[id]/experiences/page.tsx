import SheetCurriculum from '@/app/components/SheetCurriculum';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addExperience, deleteExperience, getExperiences, updateExperience } from '@/lib/actionsExperiences';
import Link from "next/link";

export default async function CreateExperiences({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const experiences = await getExperiences(curriculumId);


  return (
    <div className='flex flex-col gap-y-5 h-full'>

      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer une nouvelle experience</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>
      </div>

      <form action={addExperience} className='flex flex-col gap-y-5'>
        <Input type="hidden" name="curriculumsId" value={curriculumId} />
        <Input type="text" name="title" placeholder="Enter experience title" required />
        <Input type="text" name="description" placeholder="Enter experience description" required />
        <Input type="text" name="business" placeholder="Enter experience business" required />
        <Input type="date" name="startDate" placeholder="Enter experience start date" required />
        <Input type="date" name="endDate" placeholder="Enter experience end date" required />
        <Input type="text" name="location" placeholder="Enter experience location" required />

        <Button className='mt-5' type="submit">Ajouter une experience</Button>
      </form>
      <div className="border my-4"></div>

      {/* Liste des experiences existants */}
      <h2 className='text-2xl mb-10'>Gérer les experiences</h2>

      <ul>
        {experiences.map((experience) => (
          <li key={experience.id} className="flex items-center gap-2 mb-2">

            <form action={updateExperience} className="flex items-center gap-2">
              <Input type="hidden" name="experienceId" value={experience.id} />
              <Input type="text" name="title" defaultValue={experience.title} required />
              <Input type="text" name="description" defaultValue={experience.description} required />
              <Input type="text" name="business" defaultValue={experience.business} required />
              <Input type="date" name="startDate" defaultValue={experience.startDate.toISOString().split('T')[0]} required />
              <Input type="date" name="endDate" defaultValue={experience.endDate.toISOString().split('T')[0]} required />
              <Input type="text" name="location" defaultValue={experience.location} required />
              <Button type="submit">Mettre à jour</Button>
            </form>

            <form action={deleteExperience}>
              <Input type="hidden" name="experienceId" value={experience.id} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>

    </div>
  )
}

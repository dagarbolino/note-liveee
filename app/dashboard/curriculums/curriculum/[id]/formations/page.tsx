import SheetCurriculum from '@/app/components/SheetCurriculum';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addFormation, deleteFormation, getFormations, updateFormation } from '@/lib/actionsFormations';
import Link from "next/link";

export default async function CreateFormations({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const formations = await getFormations(curriculumId);


  return (
    <div className='flex flex-col gap-y-5 h-full'>

      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer une nouvelle formation</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>
      </div>

      <form action={addFormation} className='flex flex-col gap-y-5'>
        <Input type="hidden" name="curriculumsId" value={curriculumId} />
        <Input type="text" name="title" placeholder="Enter formation title" required />
        <Input type="text" name="description" placeholder="Enter formation description" required />
        <Input type="text" name="business" placeholder="Enter formation business" required />
        <Input type="date" name="startDate" placeholder="Enter formation start date" required />
        <Input type="date" name="endDate" placeholder="Enter formation end date" required />
        <Input type="text" name="location" placeholder="Enter formation location" required />

        <Button className='mt-5' type="submit">Ajouter une formation</Button>
      </form>
      <div className="border my-4"></div>

      {/* Liste des formations existants */}
      <h2 className='text-2xl mb-10'>Gérer les formations</h2>

      <ul>
        {formations.map((formation) => (
          <li key={formation.id} className="flex items-center gap-2 mb-2">
            <form action={updateFormation} className="flex items-center gap-2">
              <Input type="hidden" name="formationId" value={formation.id} />
              <Input type="text" name="title" defaultValue={formation.title} required />
              <Input type="text" name="description" defaultValue={formation.description} required />
              <Input type="text" name="business" defaultValue={formation.business} required />
              <Input type="date" name="startDate" defaultValue={formation.startDate.toISOString().split('T')[0]} required />
              <Input type="date" name="endDate" defaultValue={formation.endDate.toISOString().split('T')[0]} required />
              <Input type="text" name="location" defaultValue={formation.location} required />
              <Button type="submit">Mettre à jour</Button>
            </form>

            <form action={deleteFormation}>
              <Input type="hidden" name="formationId" value={formation.id} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

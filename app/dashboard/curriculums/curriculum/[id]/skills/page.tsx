import Link from "next/link";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import SheetCurriculum from '@/app/components/SheetCurriculum';
import { addSkill, getSkills, updateSkill, deleteSkill } from '@/lib/actionsSkills';


export default async function CreateSkills({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const skills = await getSkills(curriculumId);


  return (
    <div className='flex flex-col gap-y-5'>
      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer un nouveau skill</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>
      </div>

      <form action={addSkill}>
        <Input type="hidden" name="curriculumId" value={curriculumId} />
        <Input type="text" name="name" placeholder="Enter skill name" required />
        <Button className='mt-5' type="submit">Ajouter un skill</Button>
      </form>
      <div className="border my-4"></div>

      {/* Liste des skills existants */}
      <h2 className='text-2xl'>Gérer les skills</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id} className="flex items-center gap-2 mb-2">
            <form action={updateSkill} className="flex items-center gap-2">
              <Input type="hidden" name="skillId" value={skill.id} />
              <Input type="text" name="name" defaultValue={skill.name} required />
              <Button type="submit">Mettre à jour</Button>
            </form>
            <form action={deleteSkill}>
              <Input type="hidden" name="skillId" value={skill.id} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}



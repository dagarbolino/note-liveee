import SheetCurriculum from '@/app/components/SheetCurriculum';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addHobby, deleteHobby, getHobbies, updateHobby } from '@/lib/actionsHobbies';
import Link from "next/link";

export default async function CreateHobbies({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const hobbies = await getHobbies(curriculumId);


  return (
    <div className='flex flex-col gap-y-5 max-w-2xl'>

      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer un nouveau hobbie</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>
        
      </div>
      <form action={addHobby}>
        <Input type="hidden" name="curriculumId" value={curriculumId} />
        <Input type="text" name="name" placeholder="Enter hobby name" required />

        <Button className='mt-5' type="submit">Ajouter un hobbie</Button>
      </form>

      <div className="border my-4"></div>

      {/* Liste des hobbies existants */}
      <h2 className='text-2xl'>Gérer les hobbies</h2>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id} className="flex items-center gap-2 mb-2">
            <form action={updateHobby} className="flex items-center gap-2">
              <Input type="hidden" name="hobbyId" value={hobby.id} />
              <Input type="text" name="name" defaultValue={hobby.name} required />
              <Button type="submit">Mettre à jour</Button>
            </form>
            <form action={deleteHobby}>
              <Input type="hidden" name="hobbyId" value={hobby.id} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

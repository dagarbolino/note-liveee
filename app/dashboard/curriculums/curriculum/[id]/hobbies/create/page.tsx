import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addHobby, deleteHobby, getHobbies, updateHobby } from '@/lib/actionsHobbies';

export default async function CreateHobbies({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const hobbies = await getHobbies(curriculumId);

  return (
    <div className='flex flex-col gap-y-5'>
      <h1 className='text-2xl'>Créer un nouveau hobbie</h1>
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

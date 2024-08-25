import SheetCurriculum from '@/app/components/SheetCurriculum';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { addMotivation, deleteMotivation, getMotivations, updateMotivation } from '@/lib/actionsMotivations';
import Link from "next/link";


export default async function CreateMotivation({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const motivations = await getMotivations(curriculumId);


  return (
    <div className='flex flex-col gap-y-5 max-w-2xl'>

      <div className="mb-6 ml-6 border-l-4 border-orange-500 pl-6">
        <SheetCurriculum curriculumId={params.id} />
      </div>

      <div className="flex flex-row items-center justify-between gap-y-5">
        <h1 className='text-2xl'>Créer une nouvelle motivation</h1>
        <Button type="button" className="bg-blue-500 hover:bg-blue-600 text-white mt-4">
          <Link href={`/dashboard/curriculums/curriculum/${curriculumId}`}>Retour au curriculum</Link>
        </Button>

      </div>
      <form action={addMotivation}>
        <Input type="hidden" name="curriculumId" value={curriculumId} />
        <Textarea
          name="text_motivation"
          placeholder="Exprimez ce qui vous motive dans ce projet"
          required
          rows={5}
          maxLength={800}
        />
        <Button className='mt-5' type="submit">Ajouter une motivation</Button>
      </form>
      <div className="border my-4"></div>

      <h2 className='text-2xl'>Gérer la motivation</h2>

      <ul className='flex flex-col gap-y-5 mb-10'>
        {motivations.map((motivation) => (
          <li key={motivation.id} className="flex items-center gap-2 mb-2">
            <form action={updateMotivation} className="flex items-center gap-2">
              <Input type="hidden" name="motivationId" value={motivation.id} />
              <Input type="hidden" name="curriculumId" value={curriculumId} />
              <Textarea
                rows={5}
                className='md:w-[500px]'
                name="text_motivation"
                defaultValue={motivation.text_motivation}
                required
              />
              <Button type="submit">Mettre à jour</Button>
            </form>
            <form action={deleteMotivation}>
              <Input type="hidden" name="motivationId" value={motivation.id} />
              <Input type="hidden" name="curriculumId" value={curriculumId} />
              <Button type="submit" variant="destructive">Supprimer</Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  )
}

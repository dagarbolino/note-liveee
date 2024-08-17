import React from 'react'
import { getHobbies, addHobby, updateHobby } from '@/lib/actionsHobbies'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default async function PageHobbies({ params }: { params: { id: string } }) {
  const curriculumId = params.id;
  const hobbies = await getHobbies(curriculumId);

  return (
    <div>
      <h1>Liste des hobbies</h1>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>
            {hobby.name}
            <form action={updateHobby}>
              <Input type="hidden" name="hobbyId" value={hobby.id} />
              <Input type="text" name="name" defaultValue={hobby.name} />
              <Button type="submit">Update</Button>
            </form>
          </li>
        ))}
      </ul>
      <form action={addHobby}>
        <Input type="hidden" name="curriculumId" value={curriculumId} />
        <Input type="text" name="name" placeholder="New hobby" />
        <Button type="submit">Add Hobby</Button>
      </form>
    </div>
  )
}


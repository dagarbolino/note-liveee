"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getHobbies = async (curriculumId: string) => {
  return await prisma.hobby.findMany({
    where: { curriculumsId: curriculumId }
  })
}

export const addHobby = async (formData: FormData) => {
  const curriculumId = formData.get('curriculumId') as string
  const name = formData.get('name') as string

  await prisma.hobby.create({
    data: {
      name,
      curriculums: { connect: { id: curriculumId } }
    }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumId}/hobbies`)
}

export const updateHobby = async (formData: FormData) => {
  const hobbyId = formData.get('hobbyId') as string
  const name = formData.get('name') as string

  const updatedHobby = await prisma.hobby.update({
    where: { id: hobbyId },
    data: { name }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedHobby.curriculumsId}/hobbies`)
}


export const deleteHobby = async (formData: FormData) => {
  const hobbyId = formData.get('hobbyId') as string

  const deletedHobby = await prisma.hobby.delete({
    where: { id: hobbyId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deletedHobby.curriculumsId}/hobbies`)
  }

  
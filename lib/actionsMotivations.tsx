"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getMotivations = async (curriculumId: string) => {
  return await prisma.motivation.findMany({
    where: { curriculumsId: curriculumId }
  })
}

export const addMotivation = async (formData: FormData) => {
  const curriculumId = formData.get('curriculumId') as string
  const text_motivation = formData.get('text_motivation') as string

  await prisma.motivation.create({
    data: {
      text_motivation,
      curriculums: { connect: { id: curriculumId } }
    }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumId}/motivation`)
}


export const updateMotivation = async (formData: FormData) => {
  const motivationId = formData.get('motivationId') as string
  const text_motivation = formData.get('text_motivation') as string

  const updatedMotivation = await prisma.motivation.update({
    where: { id: motivationId },
    data: { text_motivation }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedMotivation.curriculumsId}/motivation`)
}

export const deleteMotivation = async (formData: FormData) => {
  const motivationId = formData.get('motivationId') as string

  const deletedMotivation = await prisma.motivation.delete({
    where: { id: motivationId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deletedMotivation.curriculumsId}/motivation`)
}


  
"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getExperiences = async (curriculumId: string) => {
  return await prisma.experience.findMany({
    where: { curriculumsId: curriculumId }
  })
} 

export const addExperience = async (formData: FormData) => {
  const curriculumsId = formData.get('curriculumsId') as string

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const business = formData.get('business') as string
  const startDate = new Date(formData.get('startDate') as string)
  const endDate = new Date(formData.get('endDate') as string)
  const location = formData.get('location') as string

  await prisma.experience.create({
    data: {
      title,
      description,
      business,
      startDate,
      endDate,
      location,
      curriculums: { connect: { id: curriculumsId } }
    }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumsId}/experiences`)
}


export const updateExperience = async (formData: FormData) => {
  const experienceId = formData.get('experienceId') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const business = formData.get('business') as string
  const startDate = new Date(formData.get('startDate') as string)
  const endDate = new Date(formData.get('endDate') as string)
  const location = formData.get('location') as string

  const updatedExperience = await prisma.experience.update({
    where: { id: experienceId },
    data: { title, description, business, startDate, endDate, location }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedExperience.curriculumsId}/experiences`)
}


export const deleteExperience = async (formData: FormData) => {
  const experienceId = formData.get('experienceId') as string

  const deletedExperience = await prisma.experience.delete({
    where: { id: experienceId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deletedExperience.curriculumsId}/experiences`)
}

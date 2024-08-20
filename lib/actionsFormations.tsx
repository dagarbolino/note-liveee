"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getFormations = async (curriculumId: string) => {
  return await prisma.formation.findMany({
    where: { curriculumsId: curriculumId }
  })
}

export const addFormation = async (formData: FormData) => {
  const curriculumsId = formData.get('curriculumsId') as string

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const business = formData.get('business') as string
  const startDate = new Date(formData.get('startDate') as string)
  const endDate = new Date(formData.get('endDate') as string)
  const location = formData.get('location') as string

  await prisma.formation.create({
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

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumsId}/formations`)
}


export const updateFormation = async (formData: FormData) => {
  const formationId = formData.get('formationId') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const business = formData.get('business') as string
  const startDate = new Date(formData.get('startDate') as string)
  const endDate = new Date(formData.get('endDate') as string)
  const location = formData.get('location') as string

  const updatedFormation = await prisma.formation.update({
    where: { id: formationId },
    data: { title, description, business, startDate, endDate, location }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedFormation.curriculumsId}/formations`)
}

export const deleteFormation = async (formData: FormData) => {
  const formationId = formData.get('formationId') as string

  const deletedFormation = await prisma.formation.delete({
    where: { id: formationId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deletedFormation.curriculumsId}/formations`)
}

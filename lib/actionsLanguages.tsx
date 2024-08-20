"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getLanguages = async (curriculumId: string) => {
  return await prisma.language.findMany({
    where: { curriculumsId: curriculumId }
  })
}

export const addLanguage = async (formData: FormData) => {
  const curriculumsId = formData.get('curriculumsId') as string
  const name = formData.get('name') as string
  const rating = parseInt(formData.get('rating') as string)

  await prisma.language.create({
    data: {
      name,
      rating,
      curriculums: { connect: { id: curriculumsId } }
    }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumsId}/languages`)
}

export const updateLanguage = async (formData: FormData) => {
  const languageId = formData.get('languageId') as string
  const name = formData.get('name') as string
  const rating = parseInt(formData.get('rating') as string)

  const updatedLanguage = await prisma.language.update({
    where: { id: languageId },
    data: { name, rating }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedLanguage.curriculumsId}/languages`)
}

export const deleteLanguage = async (formData: FormData) => {
  const languageId = formData.get('languageId') as string

  const deletedLanguage = await prisma.language.delete({
    where: { id: languageId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deletedLanguage.curriculumsId}/languages`)
}

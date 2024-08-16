"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { getUser } from "./actionsUsers"
import { revalidatePath } from "next/cache"

// Récupérer tous les curriculums pour un utilisateur donné
export const getAllCurriculums = async (userId: string) => {
  const data = await prisma.curriculums.findMany({
    where: {
      userId: userId
    },
    include: {
      contact_details: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return data
}


export const createCurriculum = async (formData: FormData) => {
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const completed = formData.get('completed')
  const last_name = formData.get('last_name') as string || ''
  const first_name = formData.get('first_name') as string || ''
  const postTitle = formData.get('postTitle') as string || ''
  const email = formData.get('email') as string
  const linkedin = formData.get('linkedin') as string || ''
  const phone = formData.get('phone') as string || ''
  const photoUrl = formData.get('photoUrl') as string || ''
  const user = await getUser()
  const userId = user?.id as string

  await prisma.curriculums.create({
    data: {
      userId,
      title,
      description,
      completed: completed === "on",
      contact_details: {
        create: {
          last_name,
          first_name,
          postTitle,
          email,
          linkedin,
          phone,
          photoUrl
        }
      }
    }
  })
  redirect('/dashboard/curriculums')
}


// Supprimer un curriculum
export const deleteCurriculum = async (formData: FormData) => {
  const id = formData.get('id') as string



  // Supprimer le curriculum
  await prisma.curriculums.delete({
    where: { id }
  })

  revalidatePath('/dashboard/curriculums')
}

// Récupérer un curriculum par ID
export const getCurriculum = async (id: string) => {
  return await prisma.curriculums.findUnique({
    where: { id },
    include: { contact_details: true }
  })
}


export const updateCurriculum = async (formData: FormData) => {
  try {
    const id = formData.get('id') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const completed = formData.get('completed')
    const last_name = formData.get('last_name') as string
    const first_name = formData.get('first_name') as string
    const postTitle = formData.get('postTitle') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const linkedin = formData.get('linkedin') as string
    const photoUrl = formData.get('photoUrl') as string

    await prisma.curriculums.update({
      where: { id },
      data: {
        title,
        description,
        completed: completed === "on",
        contact_details: {
          update: {
            last_name,
            first_name,
            postTitle,
            email,
            phone,
            linkedin,
            photoUrl
          }
        }
      }
    })
  } catch (error) {
    console.error("Erreur lors de la modification du curriculum", error)
  } finally {
    redirect('/dashboard/curriculums')
  }
}


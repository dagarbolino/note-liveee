"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
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


export const createContact = async (formData: FormData) => {
  const curriculumId = formData.get('curriculumId') as string
  const last_name = formData.get('last_name') as string
  const first_name = formData.get('first_name') as string
  const postTitle = formData.get('postTitle') as string
  const email = formData.get('email') as string
  const linkedin = formData.get('linkedin') as string || ''
  const phone = formData.get('phone') as string
  const photoUrl = formData.get('photoUrl') as string || ''

  await prisma.contact_details.create({
    data: {
      last_name,
      first_name,
      postTitle,
      email,
      linkedin,
      phone,
      photoUrl,
      curriculums: {
        connect: { id: curriculumId }
      }
    }
  })

  redirect(`/dashboard/curriculums/curriculum/${curriculumId}`)
}



// Supprimer un curriculum
export const deleteContact = async (formData: FormData) => {
  const id = formData.get('id') as string
  // Supprimer le Contact
  await prisma.curriculums.delete({
    where: { id }
  })

  revalidatePath('/dashboard/curriculums')
}


export const getContact = async (id: string) => {
  if (!id) {
    throw new Error("Curriculum ID is required");
  }
  return await prisma.curriculums.findUnique({
    where: { id },
    include: { contact_details: true }
  });
}


export const getCurriculum = async (id: string) => {
  if (!id) {
    throw new Error("ID du curriculum non fourni");
  }
  return await prisma.curriculums.findUnique({
    where: { id },
    include: { contact_details: true }
  });
}



export const updateContact = async (formData: FormData) => {
  const curriculumId = formData.get('curriculumId') as string
  try {
    const last_name = formData.get('last_name') as string
    const first_name = formData.get('first_name') as string
    const postTitle = formData.get('postTitle') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const linkedin = formData.get('linkedin') as string || null
    const photoUrl = formData.get('photoUrl') as string || null

    await prisma.contact_details.upsert({
      where: { curriculumsId: curriculumId },
      update: {
        last_name,
        first_name,
        postTitle,
        email,
        phone,
        linkedin,
        photoUrl
      },
      create: {
        last_name,
        first_name,
        postTitle,
        email,
        phone,
        linkedin,
        photoUrl,
        curriculums: { connect: { id: curriculumId } }
      }
    })
  } catch (error) {
    console.error("Error updating contact details", error)
  } finally {
    redirect(`/dashboard/curriculums/curriculum/${curriculumId}`)
  }
}



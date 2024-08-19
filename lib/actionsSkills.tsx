"use server"

import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const getSkills = async (curriculumId: string) => {
  return await prisma.skill.findMany({
    where: { curriculumsId: curriculumId }
  })
}

export const addSkill = async (formData: FormData) => {
  const curriculumId = formData.get('curriculumId') as string
  const name = formData.get('name') as string

  await prisma.skill.create({
    data: {
      name,
      curriculums: { connect: { id: curriculumId } }
    }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${curriculumId}/skills`)
}

export const updateSkill = async (formData: FormData) => {
  const skillId = formData.get('skillId') as string
  const name = formData.get('name') as string

  const updatedSkill = await prisma.skill.update({
    where: { id: skillId },
    data: { name }
  })

  revalidatePath(`/dashboard/curriculums/curriculum/${updatedSkill.curriculumsId}/skills`)
}


export const deleteSkill = async (formData: FormData) => {
  const skillId = formData.get('skillId') as string

  const deleteSkill = await prisma.skill.delete({
    where: { id: skillId }
  })
  revalidatePath(`/dashboard/curriculums/curriculum/${deleteSkill.curriculumsId}/skills`)
  }

  
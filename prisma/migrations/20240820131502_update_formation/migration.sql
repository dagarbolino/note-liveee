/*
  Warnings:

  - A unique constraint covering the columns `[curriculumsId]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[curriculumsId]` on the table `Formation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[curriculumsId]` on the table `Hobby` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[curriculumsId]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[curriculumsId]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Experience_curriculumsId_key" ON "Experience"("curriculumsId");

-- CreateIndex
CREATE UNIQUE INDEX "Formation_curriculumsId_key" ON "Formation"("curriculumsId");

-- CreateIndex
CREATE UNIQUE INDEX "Hobby_curriculumsId_key" ON "Hobby"("curriculumsId");

-- CreateIndex
CREATE UNIQUE INDEX "Language_curriculumsId_key" ON "Language"("curriculumsId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_curriculumsId_key" ON "Skill"("curriculumsId");

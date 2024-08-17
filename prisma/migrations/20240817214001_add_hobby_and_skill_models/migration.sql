-- CreateTable
CREATE TABLE "Hobby" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Hobby_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Skill_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

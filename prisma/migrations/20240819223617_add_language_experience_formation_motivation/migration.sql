-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "business" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Experience_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Formation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "business" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Formation_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 1,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Language_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Motivation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text_motivation" TEXT NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Motivation_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Language_curriculumsId_idx" ON "Language"("curriculumsId");

-- CreateIndex
CREATE UNIQUE INDEX "Motivation_curriculumsId_key" ON "Motivation"("curriculumsId");

-- DropIndex
DROP INDEX "Curriculums_id_key";

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact_details" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "last_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "postTitle" TEXT NOT NULL,
    "photoUrl" TEXT,
    "email" TEXT NOT NULL,
    "linkedin" TEXT,
    "phone" INTEGER NOT NULL,
    "curriculumsId" TEXT NOT NULL,
    CONSTRAINT "Contact_details_curriculumsId_fkey" FOREIGN KEY ("curriculumsId") REFERENCES "Curriculums" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Contact_details" ("curriculumsId", "email", "first_name", "id", "last_name", "linkedin", "phone", "photoUrl", "postTitle") SELECT "curriculumsId", "email", "first_name", "id", "last_name", "linkedin", "phone", "photoUrl", "postTitle" FROM "Contact_details";
DROP TABLE "Contact_details";
ALTER TABLE "new_Contact_details" RENAME TO "Contact_details";
CREATE UNIQUE INDEX "Contact_details_email_key" ON "Contact_details"("email");
CREATE UNIQUE INDEX "Contact_details_curriculumsId_key" ON "Contact_details"("curriculumsId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "Curriculums_userId_idx" ON "Curriculums"("userId");

/*
  Warnings:

  - You are about to drop the column `resposibleId` on the `to_do` table. All the data in the column will be lost.
  - Added the required column `responsibleId` to the `to_do` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "to_do" DROP CONSTRAINT "to_do_resposibleId_fkey";

-- AlterTable
ALTER TABLE "to_do" DROP COLUMN "resposibleId",
ADD COLUMN     "responsibleId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "to_do" ADD CONSTRAINT "to_do_resposibleId_fkey" FOREIGN KEY ("responsibleId") REFERENCES "responsible"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

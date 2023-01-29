/*
  Warnings:

  - You are about to drop the column `date` on the `to_do` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "to_do" DROP COLUMN "date",
ADD COLUMN     "createAt" TIMESTAMP(6) NOT NULL DEFAULT '2023-01-29 15:57:28.443337'::timestamp without time zone;

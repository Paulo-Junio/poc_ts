-- DropForeignKey
ALTER TABLE "to_do" DROP CONSTRAINT "to_do_statusId_fkey";

-- AddForeignKey
ALTER TABLE "to_do" ADD CONSTRAINT "to_do_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

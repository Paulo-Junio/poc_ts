-- CreateTable
CREATE TABLE "responsible" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contact" TEXT NOT NULL,

    CONSTRAINT "responsible_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status" (
    "id" SERIAL NOT NULL,
    "statusName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "to_do" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "resposibleId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "to_do_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "status_statusName_key" ON "status"("statusName");

-- AddForeignKey
ALTER TABLE "to_do" ADD CONSTRAINT "to_do_resposibleId_fkey" FOREIGN KEY ("resposibleId") REFERENCES "responsible"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "to_do" ADD CONSTRAINT "to_do_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "responsible"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

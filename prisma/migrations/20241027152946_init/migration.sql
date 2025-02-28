-- CreateEnum
CREATE TYPE "mailType" AS ENUM ('orderConfiguration', 'paymentConfirmation');

-- CreateTable
CREATE TABLE "Mail" (
    "id" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "mailDestination" TEXT NOT NULL,
    "mailContent" TEXT NOT NULL,
    "mailType" "mailType" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mail_pkey" PRIMARY KEY ("id")
);

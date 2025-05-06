/*
  Warnings:

  - You are about to drop the `Clothe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clothe" DROP CONSTRAINT "Clothe_authorId_fkey";

-- DropTable
DROP TABLE "Clothe";

-- CreateTable
CREATE TABLE "Cloth" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "authorId" INTEGER NOT NULL,
    "Image" TEXT,
    "Price" INTEGER,
    "Size" TEXT,
    "gender" TEXT,

    CONSTRAINT "Cloth_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cloth" ADD CONSTRAINT "Cloth_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

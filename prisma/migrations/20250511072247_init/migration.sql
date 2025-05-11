/*
  Warnings:

  - You are about to drop the column `Price` on the `Cloth` table. All the data in the column will be lost.
  - You are about to drop the column `Size` on the `Cloth` table. All the data in the column will be lost.
  - Made the column `description` on table `Cloth` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Image` on table `Cloth` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gender` on table `Cloth` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Cloth" DROP COLUMN "Price",
DROP COLUMN "Size",
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "Image" SET NOT NULL,
ALTER COLUMN "gender" SET NOT NULL;

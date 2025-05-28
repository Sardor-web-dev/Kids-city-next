-- CreateEnum
CREATE TYPE "Status" AS ENUM ('process', 'done', 'canceled');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'process';

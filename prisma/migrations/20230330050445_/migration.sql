/*
  Warnings:

  - You are about to drop the column `price` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "price",
ADD COLUMN     "expence" INTEGER,
ADD COLUMN     "income" INTEGER;

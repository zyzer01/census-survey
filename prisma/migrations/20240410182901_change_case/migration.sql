/*
  Warnings:

  - Added the required column `schoolAttendance` to the `household_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "household_members" DROP COLUMN "schoolAttendance",
ADD COLUMN     "schoolAttendance" BOOLEAN NOT NULL;

-- DropEnum
DROP TYPE "SchoolAttendance";

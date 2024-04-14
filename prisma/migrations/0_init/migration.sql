-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('IGBO', 'YORUBA', 'HAUSA', 'OTHER');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Relationship" AS ENUM ('HUSBAND', 'WIFE', 'CHILD', 'EXTENDED_FAMILY');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('PRIMARY', 'SECONDARY', 'TERTIARY');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('STUDENT', 'UNEMPLOYED', 'EMPLOYED', 'SELF_EMPLOYED');

-- CreateEnum
CREATE TYPE "CodePosition" AS ENUM ('HEAD', 'SPOUSE', 'CHILD', 'OTHER');

-- CreateTable
CREATE TABLE "household_members" (
    "id" SERIAL NOT NULL,
    "houseHoldId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "ethnicityCode" "Ethnicity" NOT NULL,
    "sexCode" "Sex" NOT NULL,
    "age" INTEGER NOT NULL,
    "respondent" BOOLEAN NOT NULL DEFAULT false,
    "relationshipCode" "Relationship" NOT NULL,
    "maritalStatus" "MaritalStatus" NOT NULL,
    "spouseName" TEXT NOT NULL,
    "fathersName" TEXT NOT NULL,
    "mothersName" TEXT NOT NULL,
    "schoolAttendance" BOOLEAN NOT NULL,
    "educationLevel" "EducationLevel" NOT NULL,
    "employmentStatus" "EmploymentStatus" NOT NULL,
    "headOfHousehold" BOOLEAN NOT NULL,
    "hohFirstName" TEXT NOT NULL,
    "hohLastName" TEXT NOT NULL,
    "positionInHousehold" "CodePosition" NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "household_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "household_members_id_key" ON "household_members"("id");


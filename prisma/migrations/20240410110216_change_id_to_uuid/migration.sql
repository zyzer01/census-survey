-- CreateEnum
CREATE TYPE "Ethnicity" AS ENUM ('IGBO', 'YORUBA', 'HAUSA', 'OTHER');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Relationship" AS ENUM ('FATHER', 'MOTHER', 'GUARDIAN');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED');

-- CreateEnum
CREATE TYPE "SchoolAttendance" AS ENUM ('PRESENT', 'ABSENT');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('PRIMARY', 'SECONDARY', 'TERTIARY');

-- CreateEnum
CREATE TYPE "EmploymentStatus" AS ENUM ('STUDENT', 'UNEMPLOYED', 'EMPLOYED', 'SELF_EMPLOYED');

-- CreateTable
CREATE TABLE "household_members" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "ethnicityCode" "Ethnicity" NOT NULL,
    "sexCode" "Sex" NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "respondent" BOOLEAN NOT NULL,
    "relationshipCode" "Relationship" NOT NULL,
    "maritalStatusCode" "MaritalStatus",
    "fathersName" TEXT,
    "mothersName" TEXT,
    "schoolAttendance" "SchoolAttendance",
    "educationLevel" "EducationLevel",
    "employmentStatus" "EmploymentStatus",
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "household_members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "household_members_id_key" ON "household_members"("id");

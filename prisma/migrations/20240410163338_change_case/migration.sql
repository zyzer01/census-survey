/*
  Warnings:

  - The values [PRIMARY,SECONDARY,TERTIARY] on the enum `EducationLevel` will be removed. If these variants are still used in the database, this will fail.
  - The values [STUDENT,UNEMPLOYED,EMPLOYED,SELF_EMPLOYED] on the enum `EmploymentStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [IGBO,YORUBA,HAUSA,OTHER] on the enum `Ethnicity` will be removed. If these variants are still used in the database, this will fail.
  - The values [SINGLE,MARRIED,DIVORCED] on the enum `MaritalStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [FATHER,MOTHER,GUARDIAN] on the enum `Relationship` will be removed. If these variants are still used in the database, this will fail.
  - The values [PRESENT,ABSENT] on the enum `SchoolAttendance` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE] on the enum `Sex` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EducationLevel_new" AS ENUM ('primary', 'secondary', 'tertiary');
ALTER TABLE "household_members" ALTER COLUMN "educationLevel" TYPE "EducationLevel_new" USING ("educationLevel"::text::"EducationLevel_new");
ALTER TYPE "EducationLevel" RENAME TO "EducationLevel_old";
ALTER TYPE "EducationLevel_new" RENAME TO "EducationLevel";
DROP TYPE "EducationLevel_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "EmploymentStatus_new" AS ENUM ('student', 'unemployed', 'employed', 'self_employed');
ALTER TABLE "household_members" ALTER COLUMN "employmentStatus" TYPE "EmploymentStatus_new" USING ("employmentStatus"::text::"EmploymentStatus_new");
ALTER TYPE "EmploymentStatus" RENAME TO "EmploymentStatus_old";
ALTER TYPE "EmploymentStatus_new" RENAME TO "EmploymentStatus";
DROP TYPE "EmploymentStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Ethnicity_new" AS ENUM ('igbo', 'yoruba', 'hausa', 'other');
ALTER TABLE "household_members" ALTER COLUMN "ethnicityCode" TYPE "Ethnicity_new" USING ("ethnicityCode"::text::"Ethnicity_new");
ALTER TYPE "Ethnicity" RENAME TO "Ethnicity_old";
ALTER TYPE "Ethnicity_new" RENAME TO "Ethnicity";
DROP TYPE "Ethnicity_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "MaritalStatus_new" AS ENUM ('single', 'married', 'divorced');
ALTER TABLE "household_members" ALTER COLUMN "maritalStatusCode" TYPE "MaritalStatus_new" USING ("maritalStatusCode"::text::"MaritalStatus_new");
ALTER TYPE "MaritalStatus" RENAME TO "MaritalStatus_old";
ALTER TYPE "MaritalStatus_new" RENAME TO "MaritalStatus";
DROP TYPE "MaritalStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Relationship_new" AS ENUM ('father', 'mother', 'guardian');
ALTER TABLE "household_members" ALTER COLUMN "relationshipCode" TYPE "Relationship_new" USING ("relationshipCode"::text::"Relationship_new");
ALTER TYPE "Relationship" RENAME TO "Relationship_old";
ALTER TYPE "Relationship_new" RENAME TO "Relationship";
DROP TYPE "Relationship_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "SchoolAttendance_new" AS ENUM ('present', 'absent');
ALTER TABLE "household_members" ALTER COLUMN "schoolAttendance" TYPE "SchoolAttendance_new" USING ("schoolAttendance"::text::"SchoolAttendance_new");
ALTER TYPE "SchoolAttendance" RENAME TO "SchoolAttendance_old";
ALTER TYPE "SchoolAttendance_new" RENAME TO "SchoolAttendance";
DROP TYPE "SchoolAttendance_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "Sex_new" AS ENUM ('male', 'female');
ALTER TABLE "household_members" ALTER COLUMN "sexCode" TYPE "Sex_new" USING ("sexCode"::text::"Sex_new");
ALTER TYPE "Sex" RENAME TO "Sex_old";
ALTER TYPE "Sex_new" RENAME TO "Sex";
DROP TYPE "Sex_old";
COMMIT;

/*
  Warnings:

  - The values [FATHER,MOTHER,GUARDIAN] on the enum `Relationship` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Relationship_new" AS ENUM ('HUSBAND', 'WIFE', 'CHILD', 'EXTENDED_FAMILY');
ALTER TABLE "household_members" ALTER COLUMN "relationshipCode" TYPE "Relationship_new" USING ("relationshipCode"::text::"Relationship_new");
ALTER TYPE "Relationship" RENAME TO "Relationship_old";
ALTER TYPE "Relationship_new" RENAME TO "Relationship";
DROP TYPE "Relationship_old";
COMMIT;

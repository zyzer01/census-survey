import { PrismaClient, Prisma, HouseholdMember } from "@prisma/client";

const prisma = new PrismaClient();

export const addMember = async (householdMemberData: Prisma.HouseholdMemberCreateInput): Promise<HouseholdMember> => {
    try {
        const newHouseholdMember = await prisma.householdMember.create({
            data: householdMemberData,
        });
        return newHouseholdMember;
    } catch (error) {
      console.log(error);
        throw new Error('Error adding household member');
    }
};

export const updateMember = async (id: number, updates: Prisma.HouseholdMemberUpdateInput): Promise<HouseholdMember> => {
    try {
        const updatedHouseholdMember = await prisma.householdMember.update({
            where: { id },
            data: updates,
        });
        return updatedHouseholdMember;
    } catch (error) {
      console.log(error)
        throw new Error('Error updating household member');
    }
};

export const getMembers = async (): Promise<HouseholdMember[]> => {
    try { 
        const householdMembers = await prisma.householdMember.findMany();
        return householdMembers;
    } catch (error) {
        throw new Error('Error retrieving household members');
    }
};

export const getMember = async (id: number): Promise<HouseholdMember | null> => {
    try {
      const householdMember = await prisma.householdMember.findUnique({
        where: { id },
      });
      return householdMember;
    } catch (error) {
      console.log(error);
      
      throw new Error("Error retrieving household member");
    }
  };
export const deleteMember = async (id: number): Promise<void> => {
    try {
      await prisma.householdMember.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error('Error deleting household member');
    }
  };
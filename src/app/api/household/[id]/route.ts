// api/household/[id]/route.ts

import { deleteMember, getMember, updateMember } from "@/app/lib/service";

type Params = {
    id: string
}
export async function GET(req: Request, context: { params: Params }): Promise<Response> {
    try {
        const id = context.params.id;
        const householdMember = await getMember(id);
        if (householdMember) {
            return new Response(JSON.stringify(householdMember), {
                status: 200,
            });
        } else {
            return new Response(JSON.stringify({ message: "Household member not found" }), {
                status: 404,
            });
        }
    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
        });
    }
}


export async function PUT(req: Request, context: { params: Params }): Promise<Response> {
    try {
        const id = context.params.id
        const requestBody = await req.json();
        const updatedHouseholdMember = await updateMember(id, requestBody);
        return new Response(JSON.stringify(updatedHouseholdMember), {
            status: 200
        });
    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
}

export async function DELETE(req: Request, context: { params: Params }) {
    try {
      const id = context.params.id
      await deleteMember(id);
      return new Response(null, {
        status: 204
      });
    } catch (error) {
      return new Response(JSON.stringify({ message: 'Error deleting household member' }), {
        status: 500
      })
    }
  }
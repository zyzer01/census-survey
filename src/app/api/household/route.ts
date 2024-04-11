import { addMember, getMembers } from "@/app/lib/service";
export async function POST(req: Request): Promise<Response> {
  try {
    const requestBody = await req.json();
    const newHouseholdMember = await addMember(requestBody);
    return new Response(JSON.stringify(newHouseholdMember), {
      status: 201
    });
  } catch (error: any) {
    console.log(error);
    
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    });
  }
}

export async function GET(req: Request): Promise<Response> {
  try {
    const householdMembers = await getMembers();
    return new Response(JSON.stringify(householdMembers), {
      status: 200
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500
    })
  }
}


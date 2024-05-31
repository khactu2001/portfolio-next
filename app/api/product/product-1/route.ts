import { NextResponse } from "next/server";

//
export async function POST(request: Request) {
  console.log("post product 1", request);
  const data = await request.json();
  console.log(data);
  return NextResponse.json({ message: "Hello product 1" });
}
// request ()

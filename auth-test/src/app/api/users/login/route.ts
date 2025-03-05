import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";


connectDB();

export async function GET(request: NextRequest) {
  try{
    const reqBody = await request.json();
    const {email, password} = reqBody;

    const user = await User.findOne({
      email
    });
    if (!user){
      return NextResponse.json({error: "User not found"}, {status: 400})
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(password, user.password); 
    if (!validPassword){
      return NextResponse.json({error: "Invalid password"}, {status: 400})
    }   

    //create token data
    return NextResponse.json({message: "User is found", success:true, user}, {status: 200});
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({error: error.message}, {status: 500})
  }
}
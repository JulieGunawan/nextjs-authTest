import { connectDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request: NextRequest) {
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
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    //create token
    const token = await jwt.sign(tokenData, 
        process.env.TOKEN_SECRET!, {expiresIn: "1h"}
    );
    const response = NextResponse.json({
      message:"Login successful",
      success: true,
    })
    response.cookies.set("token", token, {
      httpOnly: true,
    })

    return response;
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({error: error.message}, {status: 500})
  }
}
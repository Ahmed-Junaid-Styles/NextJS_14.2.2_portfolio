import ConnectDB from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import { NextResponse } from 'next/server';
import mongoose from "mongoose"

export async function POST(req: Request) {
  try {
    // Receive the form data from the frontend
    const { firstName, lastName, email, phone, message, } = await req.json();

    // Log the data to check if phone is received
    console.log("Received data:", { firstName, lastName, email, phone, message });

    // Check if phone is provided (it shouldn't be an empty string)
    // if (!phone || phone.trim() === "") {
    //   return NextResponse.json({ msg: ["Phone number is required."], success: false });
    // }

    // Connect to the database
    await ConnectDB();

    // Insert data into the database (this should work if phone is valid)
    const contact = await Contact.create({ firstName,lastName, email, phone, message, });

    console.log("Contact saved:", contact);

    return NextResponse.json({ msg: ["Message sent successfully"], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({ msg: "An unexpected error occurred.", success: false });
    }
  }
}

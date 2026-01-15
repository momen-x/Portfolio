import clientPromise from "@/app/lib/db";
import { AddUserSchema, TAddUser } from "@/app/validation/addUser";
import { NextRequest, NextResponse } from "next/server";

/**
 * @method GET
 * @route ~/api/momen_protoflio/users
 * @description display all messages
 * @access public
 */
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myProtoflio");

    const users = await db.collection("myProtoflio").find({}).toArray();

    return NextResponse.json(
      {
        success: true,
        message: "Users fetched successfully",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch users",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * @method POST
 * @route ~/api/momen_protoflio/users
 * @description add new user (When user add message to me)
 * @access public
 */
export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("myProtoflio");
    console.log("debug one ");
    const body = (await request.json()) as TAddUser;
    const validation = AddUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          message: validation.error.issues[0].message,
        },
        { status: 400 }
      );
    }

    const { email, message, name } = validation.data;

    const userInsertToDb = {
      ...validation.data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("myProtoflio").insertOne(userInsertToDb);

    return NextResponse.json(
      {
        success: true,
        message: "user added successfully",
        data: {
          userId: result.insertedId,
          name: name,
          message: message,
          email: email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to add user",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

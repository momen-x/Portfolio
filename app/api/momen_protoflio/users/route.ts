import clientPromise from "@/app/lib/db";
import { AddUserSchema, TAddUser } from "@/app/validation/addUser";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("eComDB");

//     // ✅ Get JSON data (not FormData since no file upload)
//     const body = await request.json();

//     // Validate category data with Zod
//     const validation = addCategortySchema.safeParse(body);

//     if (!validation.success) {
//       console.error("❌ Validation error:", validation.error.issues);
//       return NextResponse.json(
//         {
//           error: "Validation failed",
//           message: validation.error.issues[0].message,
//         },
//         { status: 400 }
//       );
//     }

//     // ✅ Check for duplicate category title
//     const existingCategory = await db.collection("category").findOne({
//       title: { $regex: new RegExp(`^${validation.data.title}$`, "i") },
//     });

//     if (existingCategory) {
//       return NextResponse.json(
//         {
//           error: "Duplicate category",
//           message: "A category with this title already exists",
//         },
//         { status: 409 } // Conflict
//       );
//     }

//     // Insert category into database
//     const categoryToInsert = {
//       ...validation.data,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const result = await db.collection("category").insertOne(categoryToInsert);

//     return NextResponse.json(
//       {
//         success: true,
//         message: "Category created successfully",
//         data: {
//           categoryId: result.insertedId,
//           title: validation.data.title,
//         },
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("❌ Error creating category:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to create category",
//         message: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     );
//   }
// }

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
console.log("debug one ")
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

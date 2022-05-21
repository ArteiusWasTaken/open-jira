import mongoose from "mongoose";
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const id = req.page.params?.id || "";

  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  //   if ( !mongoose.isValidObjectId( id ) ) {
  if (!checkMongoIDRegExp.test(String(id))) {
    return new Response(
      JSON.stringify({ message: "El id no es válido " + id }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return NextResponse.next();
}

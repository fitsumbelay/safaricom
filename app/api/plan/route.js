import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function GET(request) {
    const {data, error} =  await supabase.from('plan').select()
    // console.log("api  data", data.length, "error", error);
    if (error) {
        console.log(error)
        return NextResponse.json({status:"error", data:"error"})
      }
      
      if (!data.length) {
        console.log('No data found')
        return  NextResponse.json([])
      }

    return  NextResponse.json(data, {status:200})
}
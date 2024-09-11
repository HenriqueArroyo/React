import {getTodo, createTodo} from "@/controllers/Todo";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const todos = await getTodo();
        return NextResponse.json({ sucess:true}, {data:todos});
    } catch (error) {
        return NextResponse.json({ sucess: false}, { status: 400 });

    }}

    export async function POST() {
        try {
          const data = await req.json();
          const todo = await createTodo(data);
          return NextResponse.json({ success: true, data: todo });
        } catch (error) {
          return NextResponse.json({ success: false }, { status: 400 });
        }
      }
      


import { updateTodo, deleteTodo } from '@/controllers/Todo';
import { NextResponse } from 'next/server';


export async function PUT({ params }) {
  try {
    const data = await req.json();
    const todo = await updateTodo(params.id, data);
    if (!todo) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}


export async function DELETE( { params }) {
  try {
    const deletedTodo = await deleteTodo(params.id);
    if (!deletedTodo) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

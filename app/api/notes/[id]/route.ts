import { NextResponse } from 'next/server';

// Dočasné úložiště - mělo by být sdílené s notes/route.ts
let notes = [
  {
    id: '1',
    title: 'První poznámka',
    content: 'Obsah první poznámky', 
    tags: ['Todo'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Druhá poznámka',
    content: 'Obsah druhé poznámky',
    tags: ['Work'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const note = notes.find(n => n.id === params.id);
  
  if (!note) {
    return NextResponse.json(
      { error: 'Note not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(note);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const noteIndex = notes.findIndex(n => n.id === params.id);
    
    if (noteIndex === -1) {
      return NextResponse.json(
        { error: 'Note not found' },
        { status: 404 }
      );
    }
    
    notes[noteIndex] = {
      ...notes[noteIndex],
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    return NextResponse.json(notes[noteIndex]);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const noteIndex = notes.findIndex(n => n.id === params.id);
  
  if (noteIndex === -1) {
    return NextResponse.json(
      { error: 'Note not found' },
      { status: 404 }
    );
  }
  
  const deletedNote = notes.splice(noteIndex, 1)[0];
  return NextResponse.json(deletedNote);
}
import { NextResponse } from 'next/server';

// Dočasné úložiště dat v paměti
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tag = searchParams.get('tag');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = 10;

  console.log('API called with tag:', tag, 'page:', page);

  // Filtrování podle tagu
  let filteredNotes = notes;
  if (tag) {
    filteredNotes = notes.filter(note => 
      note.tags.includes(tag)
    );
  }

  // Paginace
  const startIndex = (page - 1) * limit;
  const paginatedNotes = filteredNotes.slice(startIndex, startIndex + limit);

  return NextResponse.json({
    notes: paginatedNotes,
    totalPages: Math.ceil(filteredNotes.length / limit)
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newNote = {
      id: Date.now().toString(),
      title: body.title,
      content: body.content,
      tags: body.tags || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    notes.push(newNote);

    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
import React from 'react'
/*import { Suspense } from 'react';*/


const DhPage = () => {
    return (
      <div>
        <h1>Gangggg</h1>
            <p>Thats whatsup</p>
    </div>
  );
};

export default DhPage;

/*type Note = {
  id: string;
  title: string;
  content: string;
  created: string;
}

async function getNotes(): Promise<Note[]> {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/doi/records?page=1&perPage=30',
    { cache: 'no-store', })

    if (!res.ok) {
      throw new Error('failed to fetch notes');
    }

  const data = await res.json()
  return data?.items as Note[]
}

export default function DhPage() {
  return (
    <div>
      <h1>Notes</h1>
      
        <Suspense fallback={<p>Loading...</p>}>
        <NotesList />
      </Suspense>
    </div>
  );
}

async function NotesList() {
  const dh = await getNotes();

  return (
    <div>
      {dh?.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

function Note({ note }: { note: Note }) {
  const { id, title, content, created } = note;
  return (
    <link href={` /dh/${id}`}>
      <h2>{title}</h2>
      <h5>{content}</h5>
      <p>{created}</p>
    </link>
  )
}*/

import React from 'react';
import NoteItem from './note-item';
import NoteList from './note-list';
import Note from './note';

function MainNote(props) {
  
  return (
    <section className="main main-notes">
      <NoteList notes={props.notes}/>
      <Note />
    </section>
  )
}

export default MainNote;
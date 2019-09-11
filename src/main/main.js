import React from 'react';
import NoteList from './note-list';
import AddNote from './add-note';

function Main(props) {
  
  return (
    <section className="main main-notes">
      {props.children}
    </section>
  )
}

export default Main;
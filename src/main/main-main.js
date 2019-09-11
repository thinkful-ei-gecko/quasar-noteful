import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteList from './note-list';
import AddNote from './add-note';

function MainMain(props) {
  
  return (
    <>
      <NoteList notes={props.notes}/>
      <AddNote />
    </>
  )
}

export default MainMain;
import React from 'react';

function Sidebar(props) {

  const { onClickBack } = props;

  const activeNote = props.notes.find((note) => 
     props.match.params.noteId === note.id
  )

  const activefolderId = activeNote.folderId;

  console.log(activefolderId);
  let activeFolder;
  activeFolder = props.folders.find((folder) =>
   activefolderId === folder.id
  )

  return (
    <section className="sidebar sidebar-main">
      <button type="button" onClick={onClickBack} >Back</button>
      <h2>{activeFolder.name}</h2>
    </section>
  )
}

export default Sidebar;
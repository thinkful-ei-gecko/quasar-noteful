import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteItem from './note-item';
function NoteList(props) {
  
/*   const poem = POEMS.find(p =>
    p.id === props.match.params.poemId
  ) */

  const noteItems = props.notes.map((note) => {
    // check if in a folder
    if (props.match.params.folderId) {
      if (props.match.params.folderId === note.folderId) {
        return <NoteItem key={note.id} note={note}/>
      }} 
    
    // check if in a note
    else if (props.match.params.noteId) {
      if (props.match.params.noteId === note.id) {
        return <NoteItem key={note.id} note={note}/>
      }
    }

    // display all on home page
    else {
      return <NoteItem key={note.id} note={note}/>
    }
  })
  return (
    <ul>
      {noteItems}
    </ul>
  )
}

export default withRouter(NoteList);

/* {
  "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
  "name": "Dogs",
  "modified": "2019-01-03T00:00:00.000Z",
  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
}, */
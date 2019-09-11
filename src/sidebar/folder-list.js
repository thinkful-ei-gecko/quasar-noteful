import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Folder from './folder';
import AddFolder from'./add-folder';

function FolderList(props) {
  
  const FolderItems = props.folders.map((folder) => {
    if (props.match.params.folderId) {
      if (props.match.params.folderId === folder.id) {
        return (
          <li key={folder.id} className='folder folder--active'>
            <Link to={`/folder/${folder.id}`}>
              {folder.name}
            </Link>
          </li>
        );
      }
      return (
        <li key={folder.id} className='folder' >
          <Link to={`/folder/${folder.id}`}>
            {folder.name}
          </Link>
        </li>
      );
    }
    else {
      return (
        <li key={folder.id} className='folder' >
          <Link to={`/folder/${folder.id}`}>
            {folder.name}
          </Link>
        </li>
      );
    }
})
  return (
    <ul className="folder-list">
      {FolderItems}
    </ul>
  );
}

export default withRouter(FolderList);
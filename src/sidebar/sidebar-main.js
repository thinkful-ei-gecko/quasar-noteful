import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './sidebar';
import FolderList from './folder-list';
import AddFolder from './add-folder';

function SidebarMain(props) {
  return (
    <>
      <FolderList folders={props.folders}/>
      <AddFolder />
    </>
  )
}

export default SidebarMain;
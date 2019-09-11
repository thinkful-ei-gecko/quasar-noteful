import React from 'react';
import { Route } from 'react-router-dom';
import FolderList from './folder-list';
import AddFolder from './add-folder';
import SidebarMain from './sidebar-main';

function Sidebar(props) {
  return (
    <section className="sidebar">
      {props.children}
    </section>
  )
}

export default Sidebar;
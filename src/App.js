import React from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './store.js';
import Sidebar from './sidebar/sidebar.js';
import SidebarMain from './sidebar/sidebar-main.js';
import SidebarNote from './sidebar/sidebar-note.js';
import MainMain from './main/main-main.js'
import Main from './main/main.js'
import MainNote from './main/main-note';

import './App.css';

class App extends React.Component {

  state = { 
    folders: STORE.folders,
    notes: STORE.notes,
  }

  render() {
    return (
      <main className='App'>
        <Sidebar folders={this.state.folders}>
          <Route 
            exact path='/' 
            render={props => 
              <SidebarMain {...props} 
                folders={this.state.folders} />}
          />
          <Route 
            path='/folder/:folderId'
            render={props => 
              <SidebarMain {...props}
                folders={this.state.folders} />}
          />
          <Route 
            path='/note/:noteId'
            render={props => 
              <SidebarNote {...props}
                folders={this.state.folders}
                notes={this.state.notes}
                onClickBack={() => props.history.goBack()} />}
          />
        </Sidebar>
        
        <div>
          <header>
            <h1><Link to="/">Noteful</Link></h1>
          </header>

          <Main notes={this.state.notes}>
            <Route 
              exact path='/' 
              render={props => 
                <MainMain {...props} 
                  notes={this.state.notes} />}
            />
            <Route 
              path='/folder/:folderId'
              render={props => 
                <MainMain {...props}
                  notes={this.state.notes} />}
            />
            <Route 
              path='/note/:noteId'
              render={props => 
                <MainNote {...props}
                  notes={this.state.notes} />}
            />
          </Main>
        </div>
      </main>
    );
  }
}

export default App;
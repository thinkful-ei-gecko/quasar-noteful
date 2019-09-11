import React from 'react';

function MainCreateFolder(props) {
  
  return (
    <section className="main main-create-folder">
      <h2>Create a folder</h2>
      <form>
        <fieldset>
          <label>Folder Name
            <input type="text" required></input>
          </label>
          <input type="submit" value="Add folder"></input>
        </fieldset>
      </form>
    </section>
  )
}

export default MainCreateFolder;
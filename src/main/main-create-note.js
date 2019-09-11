import React from 'react';

function MainCreateFolder(props) {
  
  return (
    <section className="main main-create-folder">
      <h2>Create a Note</h2>
      <form>
        <fieldset>
          <label>Note Name
            <input type="text" required></input>
          </label>
          <label>Content
            <textarea required></textarea>
          </label>
          <label>Folder
            <select>
              <option value="">...</option>
            </select>
          </label>
          <input type="submit" value="Add Note"></input>
        </fieldset>
      </form>
    </section>
  )
}

export default MainCreateFolder;
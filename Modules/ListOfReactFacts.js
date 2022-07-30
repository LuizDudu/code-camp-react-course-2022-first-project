import React from "react"

import ListTitle from "./ListTitle"

function ListOfReactFacts() {
  return (
    <div>
      <ListTitle/>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintened by Facebook</li>
        <li id='lastFact'>Power thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>
  )
}

export default ListOfReactFacts
import React from 'react'
import ReactDOM from 'react-dom'

import Footer from './Modules/Footer'
import ListOfReactFacts from './Modules/ListOfReactFacts'
import Header from './Modules/Header'

function App() {
  return (
    <div>
      <Header />
      <ListOfReactFacts />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

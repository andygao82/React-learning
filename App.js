import * as React from "react"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const name = "Andy"

export default function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1>Hello, {name}</h1>
        <h3>I am great</h3>
      </div>
      <Footer />
    </>
  )
}

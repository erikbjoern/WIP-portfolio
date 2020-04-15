import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Hello from "./Hello"
import Footer from "./Footer"

const App = () => {
    return (
        <div>
            <Header />
            <Hello />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))
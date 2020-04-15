import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Hello from "./Hello"
import Footer from "./Footer"
import About from "./About"
import Projects from "./Projects"
import { Switch, Route, BrowserRouter } from "react-router-dom"

const App = () => {
    return (
        <>
            <Header />
            <Switch />
                <Route exact path="/" component={Hello}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/projects" component={Projects}></Route>
            <Footer />
        </>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
)
import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Hello from "./Hello"
import Footer from "./Footer"
import About from "./About"
import Projects from "./Projects"
import CV from "./Cv"
import { Switch, Route, BrowserRouter } from "react-router-dom"

const App = () => {
return (
    <div>
      <Header />
      <Switch>
          <Route exact path="/" component={Hello}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/cv" component={CV}></Route>
      </Switch>   
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("app")
)
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import NotFound from './components/NotFound'
import About from './components/About'
import Profile from './components/Profile'
import Python from './components/Python'
import Html from './components/Html'
import Css from './components/Css'
import JavaScript from './components/JavaScript'
import Bootstrap from './components/Bootstrap'
import NodeJs from './components/NodeJs'
import ReactJs from './components/ReactJs'
import MySql from './components/MySql'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/python" component={Python} />
      <Route exact path="/html" component={Html} />
      <Route exact path="/css" component={Css} />
      <Route exact path="/javascript" component={JavaScript} />
      <Route exact path="/bootstrap" component={Bootstrap} />
      <Route exact path="/nodejs" component={NodeJs} />
      <Route exact path="/reactjs" component={ReactJs} />
      <Route exact path="/mysql" component={MySql} />
      <Route exact path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

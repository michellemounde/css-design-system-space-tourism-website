import { NavLink, Route, Switch } from "react-router-dom"

import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination'
import Technology from './components/Technology'

import './App.css'

function App() {
  return (
    <>
        <nav>
          <ul>
            <li><NavLink activeClassName='active' to="/" exact>00 Home</NavLink></li>
            <li><NavLink activeClassName='active' to="/destination" exact>01 Destination</NavLink></li>
            <li><NavLink activeClassName='active' to="/crew" exact>02 Crew</NavLink></li>
            <li><NavLink activeClassName='active' to="/technology" exact>03 Technology</NavLink></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/crew' exact component={Crew}></Route>
          <Route path='/destination' exact component={Destination}></Route>
          <Route path='/technology' exact component={Technology}></Route>
        </Switch>
    </>
  )
}

export default App

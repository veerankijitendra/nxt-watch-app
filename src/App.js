import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

class App extends Component {
  state = {isDarkMode: false, activeRoute: 'home'}

  changeTheBGMode = () => {
    this.setState(previous => ({isDarkMode: !previous.isDarkMode}))
  }

  changeInActiveRoute = activeRoute => {
    this.setState({activeRoute})
  }

  render() {
    const {isDarkMode, activeRoute} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          changeTheBGMode: this.changeTheBGMode,
          activeRoute,
          changeInActiveRoute: this.changeInActiveRoute,
        }}
      >
        <>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </>
      </NxtWatchContext.Provider>
    )
  }
}

export default App

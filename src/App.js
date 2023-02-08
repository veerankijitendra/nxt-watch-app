import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// const routeStatus = {
//   home: '/',
//   game: '/gaming',
//   trend: '/trending',
//   saved: '/saved-videos',
// }

class App extends Component {
  state = {
    isDarkMode: false,
    activeRoute: window.location.pathname,
    activeBanner: window.location.pathname,
    savedVideos: [
      //   {
      //     channelName: 'iB Hubs',
      //     channelProfileImageUrl:
      //       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png',
      //     channelSubscriberCount: '1M',
      //     description:
      //       'iB Hubs, an initiative of iB Group, is a PAN India startup hub that provides end-to-end assistance to startups.',
      //     id: '89383330-f76c-4ca4-b13b-9b3e9bf8a808',
      //     publishedAt: 7,
      //     thumbnailUrl:
      //       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-startup-img.png',
      //     title:
      //       'A welcoming interaction with Hyderabad startup community : iB Hubs',
      //     videoUrl: 'https://www.youtube.com/watch?v=2TyWx8-qJqg',
      //     viewCount: '9.6K',
      //   },
    ],
  }

  componentDidMount() {}

  updateSaveVideos = video => {
    const {savedVideos} = this.state
    const isThere = savedVideos.some(each => each.id === video.id)
    console.log(isThere)
    if (isThere) {
      const a = savedVideos.filter(each => each.id !== video.id)
      this.setState({savedVideos: [...a]})
      return
    }
    this.setState(previous => ({savedVideos: [...previous.savedVideos, video]}))
  }

  changeTheBGMode = () => {
    this.setState(previous => ({isDarkMode: !previous.isDarkMode}))
  }

  changeInActiveRoute = activeRoute => {
    this.setState({activeRoute})
  }

  onChangeBanner = activeBanner => {
    this.setState({activeBanner})
  }

  render() {
    const {isDarkMode, activeRoute, activeBanner, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          changeTheBGMode: this.changeTheBGMode,
          activeRoute,
          changeInActiveRoute: this.changeInActiveRoute,
          activeBanner,
          changeBanner: this.onChangeBanner,
          savedVideos,
          updateSaveVideos: this.updateSaveVideos,
        }}
      >
        <>
          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />

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

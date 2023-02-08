import React from 'react'

const routeStatus = {
  home: '/',
  game: '/gaming',
  trend: '/trending',
  saved: '/saved-videos',
}

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  activeRoute: routeStatus.home,
  activeBanner: routeStatus.trend,
  savedVideos: [],
  changeTheBGMode: () => {},
  changeInActiveRoute: () => {},
  changeBanner: () => {},
  updateSaveVideos: () => {},
})

export default NxtWatchContext

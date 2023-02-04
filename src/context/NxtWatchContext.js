import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  activeRoute: 'home',
  changeTheBGMode: () => {},
  changeInActiveRoute: () => {},
})

export default NxtWatchContext

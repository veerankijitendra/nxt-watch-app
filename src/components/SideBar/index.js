import NxtWatchContext from '../../context/NxtWatchContext'

import ContactUs from '../ContactUs'
import RoutesShortCut from '../RoutesShortCut'

import {SideBarCon} from './styledComponent'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <SideBarCon outline={isDarkMode.toString()} key="side-bar">
          <RoutesShortCut />
          <ContactUs />
        </SideBarCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar

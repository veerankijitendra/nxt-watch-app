import Header from '../Header'
import SideBar from '../SideBar'
import BannerComponent from '../BannerComponent'
import NoSavedVideos from '../NoSavedVideos'
import SavedVideosList from '../SavedVideosList'

import {
  BG,
  SideBarCon,
  SideBarConAndBanner,
  BannerAndRouteComponent,
  HeaderBG,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, savedVideos} = value

      const renderNoVideosView = () => <NoSavedVideos />

      const renderSavedVideosView = () => (
        <>
          <BannerComponent />
          <SavedVideosList videosList={savedVideos} />
        </>
      )

      return (
        <BG isDarkMode={isDarkMode} data-testId="savedVideos">
          <HeaderBG outline={isDarkMode.toString()}>
            <Header />
          </HeaderBG>
          <SideBarConAndBanner>
            <SideBarCon outline={isDarkMode.toString()}>
              <SideBar />
            </SideBarCon>
            <BannerAndRouteComponent>
              <>
                {savedVideos.length === 0
                  ? renderNoVideosView()
                  : renderSavedVideosView()}
              </>
            </BannerAndRouteComponent>
          </SideBarConAndBanner>
        </BG>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos

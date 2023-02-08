import {Heading, NoSavedVideosCon, Para, Image} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const NoSavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <NoSavedVideosCon>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading outline={isDarkMode.toString()}>
            No saved videos found
          </Heading>
          <Para outline={isDarkMode.toString()}>
            You can save your videos while watching them
          </Para>
        </NoSavedVideosCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NoSavedVideos

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingComponentCon,
  GamingImage,
  ParaDescription,
  ViewsElement,
} from './styledComponent'

const GameVideoComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      const {thumbnailUrl, title, viewCount} = video

      return (
        <GamingComponentCon>
          <GamingImage src={thumbnailUrl} alt="gaming image" />
          <ParaDescription outline={isDarkMode.toString()}>
            {title}
          </ParaDescription>
          <ViewsElement outline={isDarkMode.toString()}>
            {viewCount} Watching <br /> Worldwide
          </ViewsElement>
        </GamingComponentCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GameVideoComponent

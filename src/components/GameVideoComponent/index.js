import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingComponentCon,
  GamingImage,
  ParaDescription,
  ViewsElement,
  LinkCom,
} from './styledComponent'

const GameVideoComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      const {thumbnailUrl, title, viewCount, id} = video

      return (
        <LinkCom to={`/videos/${id}`}>
          <GamingComponentCon>
            <GamingImage src={thumbnailUrl} alt="video thumbnail" />
            <ParaDescription outline={isDarkMode.toString()}>
              {title}
            </ParaDescription>
            <ViewsElement outline={isDarkMode.toString()}>
              {viewCount} Watching <br /> Worldwide
            </ViewsElement>
          </GamingComponentCon>
        </LinkCom>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default GameVideoComponent

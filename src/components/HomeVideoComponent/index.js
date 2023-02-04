import {
  HomeComponentChanelCon,
  HomeComponentChanelListInfo,
  HomeComponentChanelName,
  HomeComponentChannelImage,
  HomeComponentDescription,
  HomeComponentImage,
  HomeLinkComponent,
  HomeChannelImageAndDetailsCon,
  HomeComponentDetailsCon,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideoComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      const {
        thumbnailUrl,
        channelName,
        channelProfileImageUrl,
        publishedAt,
        title,
        viewCount,
      } = video

      const publishedYear = new Date(publishedAt).getFullYear()
      const presentYear = new Date().getFullYear()
      const diff = presentYear - publishedYear
      return (
        <HomeLinkComponent>
          <HomeComponentImage src={thumbnailUrl} alt="channel" />
          <HomeChannelImageAndDetailsCon>
            <HomeComponentChannelImage
              src={channelProfileImageUrl}
              alt="channel icon"
            />
            <HomeComponentDetailsCon>
              <HomeComponentDescription outline={isDarkMode.toString()}>
                {title}
              </HomeComponentDescription>
              <HomeComponentChanelCon>
                <HomeComponentChanelName outline={isDarkMode.toString()}>
                  {channelName}
                </HomeComponentChanelName>
                <HomeComponentChanelListInfo outline={isDarkMode.toString()}>
                  {viewCount}
                </HomeComponentChanelListInfo>
                <HomeComponentChanelListInfo outline={isDarkMode.toString()}>
                  {diff} Years ago
                </HomeComponentChanelListInfo>
              </HomeComponentChanelCon>
            </HomeComponentDetailsCon>
          </HomeChannelImageAndDetailsCon>
        </HomeLinkComponent>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoComponent

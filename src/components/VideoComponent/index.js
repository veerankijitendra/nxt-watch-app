import {
  ComponentChanelCon,
  ComponentChanelListInfo,
  ComponentChanelName,
  ComponentChannelImage,
  ComponentDescription,
  ComponentImage,
  LinkComponent,
  ChannelImageAndDetailsCon,
  ComponentDetailsCon,
  Para,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const VideoComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      const {
        id,
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
        <LinkComponent to={`/videos/${id}`}>
          <ComponentImage src={thumbnailUrl} alt="video thumbnail" />
          <ChannelImageAndDetailsCon>
            <ComponentChannelImage
              src={channelProfileImageUrl}
              alt="channel icon"
            />
            <ComponentDetailsCon>
              <ComponentDescription outline={isDarkMode.toString()}>
                {title}
              </ComponentDescription>
              <ComponentChanelCon>
                <ComponentChanelName outline={isDarkMode.toString()}>
                  <Para outline={isDarkMode.toString()}>{channelName}</Para>
                </ComponentChanelName>
                <ComponentChanelListInfo outline={isDarkMode.toString()}>
                  <Para outline={isDarkMode.toString()}>{viewCount}</Para>
                </ComponentChanelListInfo>
                <ComponentChanelListInfo outline={isDarkMode.toString()}>
                  <Para outline={isDarkMode.toString()}>{diff} </Para>
                  <Para> Years ago </Para>
                </ComponentChanelListInfo>
              </ComponentChanelCon>
            </ComponentDetailsCon>
          </ChannelImageAndDetailsCon>
        </LinkComponent>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoComponent

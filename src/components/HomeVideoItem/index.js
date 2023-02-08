import VideoPlayer from '../VideoPlayer'
import {
  ComponentChanelCon,
  ComponentChanelListInfo,
  ComponentChanelName,
  ComponentChannelImage,
  ComponentDescription,
  LinkComponent,
  ChannelImageAndDetailsCon,
  ComponentDetailsCon,
  Para,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const HomeVideoItem = props => (
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
          <VideoPlayer videoUrl={thumbnailUrl} />
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
                  <Para outline={isDarkMode.toString()}>{diff} Years ago</Para>
                </ComponentChanelListInfo>
              </ComponentChanelCon>
            </ComponentDetailsCon>
          </ChannelImageAndDetailsCon>
        </LinkComponent>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoItem

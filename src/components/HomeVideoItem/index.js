import {
  ComponentChanelCon,
  ComponentChanelListInfo,
  ComponentChanelName,
  ComponentImage,
  ComponentChannelImage,
  ComponentDescription,
  LinkComponent,
  ChannelImageAndDetailsCon,
  ComponentDetailsCon,
  Para,
  List,
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
        <List>
          <LinkComponent to={`/videos/${id}`}>
            <ComponentImage src={thumbnailUrl} alt="video thumbnail" />
            <ChannelImageAndDetailsCon>
              <ComponentChannelImage
                src={channelProfileImageUrl}
                alt="channel logo"
              />
              <ComponentDetailsCon>
                <ComponentDescription outline={isDarkMode.toString()}>
                  <Para outline={isDarkMode.toString()}>{title}</Para>
                </ComponentDescription>
                <ComponentChanelCon>
                  <ComponentChanelName outline={isDarkMode.toString()}>
                    <Para outline={isDarkMode.toString()}>{channelName}</Para>
                  </ComponentChanelName>
                  <ComponentChanelListInfo outline={isDarkMode.toString()}>
                    <Para outline={isDarkMode.toString()}>{viewCount}</Para>
                  </ComponentChanelListInfo>
                  <ComponentChanelListInfo outline={isDarkMode.toString()}>
                    <Para outline={isDarkMode.toString()}>{diff} </Para> Years
                    ago
                  </ComponentChanelListInfo>
                </ComponentChanelCon>
              </ComponentDetailsCon>
            </ChannelImageAndDetailsCon>
          </LinkComponent>
        </List>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoItem

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Heading,
  Image,
  Para,
  Con,
  ListElement,
  TimePeriodElement,
  SavedItemCon,
} from './styledComponent'

const SaveItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      console.log(video)
      const {channelName, title, viewCount, publishedAt, thumbnailUrl} = video
      console.log(channelName, title, viewCount)
      return (
        <SavedItemCon>
          <Image src={thumbnailUrl} alt="video thumbnail" />
          <div>
            <Heading outline={isDarkMode.toString()}>{title}</Heading>
            <Para outline={isDarkMode.toString()}>{channelName}</Para>
            <Con>
              <ListElement>
                <Para outline={isDarkMode.toString()}>{viewCount} views</Para>
              </ListElement>
              <TimePeriodElement>
                <Para outline={isDarkMode.toString()}>
                  {publishedAt} years ago
                </Para>
              </TimePeriodElement>
            </Con>
          </div>
        </SavedItemCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SaveItem

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Heading,
  Image,
  Para,
  Con,
  ListElement,
  TimePeriodElement,
  SavedItemCon,
  LinkCom,
} from './styledComponent'

const SaveItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {video} = props
      const {
        channelName,
        title,
        viewCount,
        publishedAt,
        thumbnailUrl,
        id,
      } = video

      return (
        <LinkCom to={`/videos/${id}`}>
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
        </LinkCom>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SaveItem

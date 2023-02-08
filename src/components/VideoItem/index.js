import NxtWatchContext from '../../context/NxtWatchContext'
import VideoPlayer from '../VideoPlayer'

import {
  VIBreakElement,
  VIButton,
  VIButtonClicked,
  VIIconsCon,
  IconName,
  LikeIcon,
  LikedIcon,
  DisLikeIcon,
  DisLikedIcon,
  SavedIcon,
  VITimePeriodElement,
  VITitle,
  VIViewsSubscriberElement,
  VIViewsTimeLineCon,
  VIIconListElement,
  VIChannelDescription,
  VIChannelName,
  VISubscribers,
  VIThumbnailImg,
  VIThumbnailAndChannelCon,
  VideoItemBG,
} from './styledComponent'

const VideoItem = props => {
  const liked = () => {
    const {onChangeLike} = props
    onChangeLike()
  }

  const disLiked = () => {
    const {onChangeDislike} = props
    onChangeDislike()
  }

  const renderDisLikeButton = (active, dark) => (
    <>
      {active ? (
        <VIButtonClicked
          type="button"
          onClick={disLiked}
          outline={dark.toString()}
        >
          <DisLikedIcon outline={dark.toString()} />
          <IconName>Dislike</IconName>
        </VIButtonClicked>
      ) : (
        <VIButton type="button" onClick={disLiked} outline={dark.toString()}>
          <DisLikeIcon outline={dark.toString()} /> <IconName>Dislike</IconName>
        </VIButton>
      )}
    </>
  )

  const renderLikeButton = (active, dark) => (
    <>
      {active ? (
        <VIButtonClicked
          type="button"
          onClick={liked}
          outline={dark.toString()}
        >
          <LikedIcon outline={dark.toString()} /> <IconName>Like</IconName>
        </VIButtonClicked>
      ) : (
        <VIButton type="button" onClick={liked} outline={dark.toString()}>
          <LikeIcon outline={dark.toString()} /> <IconName>Like</IconName>
        </VIButton>
      )}
    </>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, updateSaveVideos} = value
        const {video, isDislikeActive, isLikeActive, isSaved} = props
        const dark = isDarkMode
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          thumbnailUrl,
          channelName,
          channelSubscriberCount,
          description,
        } = video
        const saved = () => {
          updateSaveVideos(video)
        }

        const renderSavedButton = active => (
          <>
            {active ? (
              <VIButtonClicked
                type="button"
                onClick={saved}
                outline={dark.toString()}
              >
                <SavedIcon outline={dark.toString()} />
                <IconName>Saved</IconName>
              </VIButtonClicked>
            ) : (
              <VIButton type="button" onClick={saved} outline={dark.toString()}>
                <SavedIcon outline={dark.toString()} />
                <IconName>Save</IconName>
              </VIButton>
            )}
          </>
        )

        return (
          <VideoItemBG>
            <VideoPlayer videoUrl={videoUrl} />
            <VITitle outline={dark.toString()}>{title}</VITitle>
            <>
              <VIViewsTimeLineCon>
                <VIViewsSubscriberElement outline={dark.toString()}>
                  {viewCount} views
                </VIViewsSubscriberElement>
                <VITimePeriodElement outline={dark.toString()}>
                  {publishedAt} years ago
                </VITimePeriodElement>
              </VIViewsTimeLineCon>
              <VIIconsCon>
                <VIIconListElement outline={dark.toString()}>
                  {renderLikeButton(isLikeActive, dark)}
                </VIIconListElement>
                <VIIconListElement outline={dark.toString()}>
                  {renderDisLikeButton(isDislikeActive, dark)}
                </VIIconListElement>
                <VIIconListElement outline={dark.toString()}>
                  {renderSavedButton(isSaved, dark)}
                </VIIconListElement>
              </VIIconsCon>
            </>
            <VIBreakElement outline={dark.toString()} />
            <VIThumbnailAndChannelCon>
              <VIThumbnailImg src={thumbnailUrl} alt="thumbnail" />
              <div>
                <VIChannelName outline={dark.toString()}>
                  {channelName}
                </VIChannelName>
                <VISubscribers outline={dark.toString()}>
                  {channelSubscriberCount} subscribers
                </VISubscribers>
              </div>
            </VIThumbnailAndChannelCon>
            <VIChannelDescription outline={dark.toString()}>
              {description}
            </VIChannelDescription>
          </VideoItemBG>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoItem

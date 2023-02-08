import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import FailureComponent from '../FailureComponent'

import {
  BG,
  SideBarCon,
  SideBarConAndBanner,
  LoadingComponent,
  BannerAndRouteComponent,
  HeaderBG,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Updated',
  failure: 'failure',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    video: {},
    isDislikeActive: false,
    isLikeActive: false,
  }

  componentDidMount() {
    this.getPageDetails()
  }

  onChangeLike = () => {
    this.setState(previous => ({
      isLikeActive: !previous.isLikeActive,
      isDislikeActive: false,
    }))
  }

  onChangeDislike = () => {
    this.setState(previous => ({
      isLikeActive: false,
      isDislikeActive: !previous.isDislikeActive,
    }))
  }

  caseConversion = video => {
    const {channel} = video
    const publishedAt =
      new Date().getFullYear() - new Date(video.published_at).getFullYear()
    return {
      channelName: channel.name,
      channelProfileImageUrl: channel.profile_image_url,
      channelSubscriberCount: channel.subscriber_count,
      description: video.description,
      id: video.id,
      publishedAt,
      thumbnailUrl: video.thumbnail_url,
      title: video.title,
      videoUrl: video.video_url,
      viewCount: video.view_count,
    }
  }

  getPageDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.initial})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = this.caseConversion(data.video_details)
      this.setState({
        video: {...updatedData},
        apiStatus: apiStatusConstants.success,
      })
      return
    }
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderLoadingElement = () => (
    <LoadingComponent data-testId="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingComponent>
  )

  renderSuccessView = savedVideos => {
    const {video, isDislikeActive, isLikeActive} = this.state
    const isThere = savedVideos.some(each => each.id === video.id)

    return (
      <VideoItem
        video={video}
        isDislikeActive={isDislikeActive}
        isLikeActive={isLikeActive}
        isSaved={isThere}
        onChangeDislike={this.onChangeDislike}
        onChangeLike={this.onChangeLike}
      />
    )
  }

  renderFailureView = () => <FailureComponent reloadAPI={this.getPageDetails} />

  renderComponents = savedVideos => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderLoadingElement()

      case apiStatusConstants.success:
        return this.renderSuccessView(savedVideos)

      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, savedVideos} = value

          return (
            <BG isDarkMode={isDarkMode} data-testId="videoItemDetails">
              <HeaderBG outline={isDarkMode.toString()}>
                <Header />
              </HeaderBG>
              <SideBarConAndBanner>
                <SideBarCon outline={isDarkMode.toString()}>
                  <SideBar />
                </SideBarCon>
                <BannerAndRouteComponent>
                  {this.renderComponents(savedVideos)}
                </BannerAndRouteComponent>
              </SideBarConAndBanner>
            </BG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetails

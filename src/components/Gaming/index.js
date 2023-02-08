import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import BannerComponent from '../BannerComponent'
import GamingVideosList from '../GamingVideosList'
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

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getPageDetails()
  }

  caseConversion = videos => {
    const updatedVideos = videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    return updatedVideos
  }

  getPageDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.initial})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = this.caseConversion(data.videos)
      this.setState({
        videosList: [...updatedData],
        apiStatus: apiStatusConstants.success,
      })
      return
    }
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderLoadingElement = () => (
    <LoadingComponent>
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingComponent>
  )

  renderSuccessView = () => {
    const {videosList} = this.state

    return <GamingVideosList videos={videosList} />
  }

  renderFailureView = () => <FailureComponent reloadAPI={this.getPageDetails} />

  renderComponents = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderLoadingElement()

      case apiStatusConstants.success:
        return this.renderSuccessView()

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
          const {isDarkMode} = value

          return (
            <BG isDarkMode={isDarkMode} data-testId="gaming">
              <HeaderBG outline={isDarkMode.toString()}>
                <Header />
              </HeaderBG>
              <SideBarConAndBanner>
                <SideBarCon outline={isDarkMode.toString()}>
                  <SideBar />
                </SideBarCon>
                <BannerAndRouteComponent>
                  <BannerComponent />
                  {this.renderComponents()}
                </BannerAndRouteComponent>
              </SideBarConAndBanner>
            </BG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Gaming

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeBanner from '../HomeBanner'
import HomeVideosList from '../HomeVideosList'
import HomeNoSearchResultComponent from '../HomeNoSearchResultComponent'
import FailureComponent from '../FailureComponent'

import {
  BG,
  SideBarCon,
  SideBarConAndBanner,
  LoadingComponent,
  BannerAndRouteComponent,
  SearchButton,
  SearchElement,
  SearchElementCon,
  SearchIcon,
  HeaderBG,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Updated',
  failure: 'failure',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    isHomeBannerClosed: false,
    search: '',
  }

  componentDidMount() {
    this.getPageDetails()
  }

  caseConversion = videos => {
    const updatedVideos = videos.map(each => {
      const {channel} = each

      return {
        channelName: channel.name,
        channelProfileImageUrl: channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }
    })
    return updatedVideos
  }

  removeHomeBanner = () => {
    this.setState({isHomeBannerClosed: true})
  }

  getPageDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.initial})
    const {search} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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

  retryTheResult = () => {
    this.setState({search: ''}, this.getPageDetails)
  }

  renderLoadingElement = () => (
    <LoadingComponent data-testId="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingComponent>
  )

  changeSearchInput = e => {
    this.setState({search: e.target.value})
  }

  renderSearchComponent = isDarkMode => {
    const {search} = this.state
    return (
      <SearchElementCon>
        <SearchElement
          type="search"
          value={search}
          onChange={this.changeSearchInput}
          placeholder="Search"
          outline={isDarkMode.toString()}
        />
        <SearchButton
          type="search"
          onClick={this.getPageDetails}
          data-testId="searchButton"
        >
          <SearchIcon />
        </SearchButton>
      </SearchElementCon>
    )
  }

  renderSuccessHomeView = () => {
    const {videosList} = this.state
    const videosLength = videosList.length
    return videosLength === 0 ? (
      <HomeNoSearchResultComponent getPageDetails={this.retryTheResult} />
    ) : (
      <HomeVideosList videos={videosList} />
    )
  }

  renderFailureView = () => <FailureComponent reloadAPI={this.getPageDetails} />

  renderHomeComponents = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderLoadingElement()

      case apiStatusConstants.success:
        return this.renderSuccessHomeView()

      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const {isHomeBannerClosed} = this.state

          return (
            <BG isDarkMode={isDarkMode} data-testId="home">
              <HeaderBG outline={isDarkMode.toString()}>
                <Header />
              </HeaderBG>
              <SideBarConAndBanner>
                <SideBarCon outline={isDarkMode.toString()}>
                  <SideBar />
                </SideBarCon>
                <BannerAndRouteComponent>
                  {!isHomeBannerClosed ? (
                    <HomeBanner
                      removeHomeBanner={this.removeHomeBanner}
                      isDarkMode={isDarkMode}
                    />
                  ) : null}
                  {this.renderSearchComponent(isDarkMode)}
                  {this.renderHomeComponents()}
                </BannerAndRouteComponent>
              </SideBarConAndBanner>
            </BG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home

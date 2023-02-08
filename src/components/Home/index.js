import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

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
    searchInput: '',
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
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  renderHomePageSuccessView = () => {}

  renderLoadingElement = () => (
    <LoadingComponent>
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingComponent>
  )

  changeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  renderSearchComponent = isDarkMode => {
    const {searchInput} = this.state
    return (
      <SearchElementCon>
        <SearchElement
          type="search"
          value={searchInput}
          onChange={this.changeSearchInput}
          placeholder="Search"
          outline={isDarkMode.toString()}
        />
        <SearchButton type="button" onClick={this.getPageDetails}>
          <SearchIcon />
        </SearchButton>
      </SearchElementCon>
    )
  }

  renderSuccessHomeView = () => {
    const {videosList} = this.state
    const videosLength = videosList.length
    return videosLength === 0 ? (
      <HomeNoSearchResultComponent />
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

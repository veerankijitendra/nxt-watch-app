import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import SideBar from '../SideBar'
import HomeBanner from '../HomeBanner'
import HomeVideosList from '../HomeVideosList'

import {
  HomeBG,
  SideBarCon,
  SideBarConAndHomeBanner,
  LoadingComponent,
  HomeBannerAndHomeComponent,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'Initial',
  loading: 'Loading',
  success: 'Updated',
  noResultFound: 'No results found',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial, homePageVideosList: []}

  componentDidMount() {
    this.getHomePageDetails()
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

  getHomePageDetails = async () => {
    const url = 'https://apis.ccbp.in/videos/all?search='
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
        homePageVideosList: [...updatedData],
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderHomePageSuccessView = () => {}

  renderLoadingElement = () => (
    <LoadingComponent>
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </LoadingComponent>
  )

  renderSuccessHomeView = () => {
    const {homePageVideosList} = this.state
    return <HomeVideosList videos={homePageVideosList} />
  }

  renderHomeComponents = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderLoadingElement()

      case apiStatusConstants.success:
        return this.renderSuccessHomeView()
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
            <HomeBG data-textId="home" isDarkMode={isDarkMode}>
              <>
                <Header />
              </>
              <SideBarConAndHomeBanner>
                <SideBarCon>
                  <SideBar />
                </SideBarCon>
                <HomeBannerAndHomeComponent>
                  <HomeBanner />
                  {this.renderHomeComponents()}
                </HomeBannerAndHomeComponent>
              </SideBarConAndHomeBanner>
            </HomeBG>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home

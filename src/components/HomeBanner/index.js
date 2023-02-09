import {
  HomeBannerButton,
  HomeBannerImage,
  HomeBannerPara,
  HomeBannerCon,
  HomeBannerCloseIcon,
  HomeBannerImageCloseIconCon,
  HomeBannerCloseButton,
} from './styledComponent'

const HomeBanner = props => {
  const {removeHomeBanner, isDarkMode} = props
  const closeTheBannerComponent = () => {
    removeHomeBanner()
  }

  const image = isDarkMode
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  return (
    <HomeBannerCon data-testId="banner">
      <HomeBannerImageCloseIconCon>
        <HomeBannerImage src={image} alt="nxt watch logo" />
        <HomeBannerCloseButton
          onClick={closeTheBannerComponent}
          data-testId="close"
        >
          <HomeBannerCloseIcon />
        </HomeBannerCloseButton>
      </HomeBannerImageCloseIconCon>
      <HomeBannerPara>
        Buy Nxt Watch Premium prepaid plans with UPI
      </HomeBannerPara>
      <HomeBannerButton type="button">GET IT NOW</HomeBannerButton>
    </HomeBannerCon>
  )
}

export default HomeBanner

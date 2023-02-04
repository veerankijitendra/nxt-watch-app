import {
  HomeBannerButton,
  HomeBannerImage,
  HomeBannerPara,
  HomeBannerCon,
  HomeBannerCloseIcon,
  HomeBannerImageCloseIconCon,
} from './styledComponent'

const HomeBanner = () => (
  <HomeBannerCon>
    <HomeBannerImageCloseIconCon>
      <HomeBannerImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <HomeBannerCloseIcon />
    </HomeBannerImageCloseIconCon>
    <HomeBannerPara>
      Buy Nxt Watch Premium <br /> prepaid plans with UPI
    </HomeBannerPara>
    <HomeBannerButton type="button">GET IT NOW</HomeBannerButton>
  </HomeBannerCon>
)

export default HomeBanner

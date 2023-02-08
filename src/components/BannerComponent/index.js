import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BannerIconCon,
  BannerTrendingIcon,
  BannerGamingIcon,
  BannerSavedVideoIcon,
  BannerHeading,
  BannerCon,
} from './styledComponent'

const routeStatus = {
  home: '/',
  game: '/gaming',
  trend: '/trending',
  saved: '/saved-videos',
}

const BannerComponent = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, activeBanner} = value

      const renderNameOfBanner = () => {
        switch (activeBanner) {
          case routeStatus.game:
            return (
              <BannerHeading outline={isDarkMode.toString()}>
                Gaming
              </BannerHeading>
            )
          case routeStatus.trend:
            return (
              <BannerHeading outline={isDarkMode.toString()}>
                Trending
              </BannerHeading>
            )

          case routeStatus.saved:
            return (
              <BannerHeading outline={isDarkMode.toString()}>
                Saved Videos
              </BannerHeading>
            )
          default:
            return null
        }
      }

      const renderBannerImage = () => {
        switch (activeBanner) {
          case routeStatus.game:
            return (
              <BannerIconCon outline={isDarkMode.toString()}>
                <BannerGamingIcon outline={isDarkMode.toString()} />
              </BannerIconCon>
            )
          case routeStatus.trend:
            return (
              <BannerIconCon outline={isDarkMode.toString()}>
                <BannerTrendingIcon outline={isDarkMode.toString()} />
              </BannerIconCon>
            )

          case routeStatus.saved:
            return (
              <BannerIconCon outline={isDarkMode.toString()}>
                <BannerSavedVideoIcon outline={isDarkMode.toString()} />
              </BannerIconCon>
            )
          default:
            return null
        }
      }

      return (
        <BannerCon outline={isDarkMode.toString()}>
          {renderBannerImage()}
          {renderNameOfBanner()}
        </BannerCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default BannerComponent

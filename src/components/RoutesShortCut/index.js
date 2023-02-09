import {withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MenuPopupListCon,
  MenuName,
  MenuListItem,
  HomeIcon,
  RouteButton,
  RouteLink,
  TrendingIcon,
  GamingIcon,
  SavedVideosIcon,
} from './styledComponent'

const routeStatus = {
  home: '/',
  game: '/gaming',
  trend: '/trending',
  saved: '/saved-videos',
}

const RoutesShortCut = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {changeInActiveRoute, activeRoute, changeBanner} = value

      const homeRouteClicked = () => {
        changeInActiveRoute(routeStatus.home)
      }

      const trendingRouteClicked = () => {
        changeInActiveRoute(routeStatus.trend)
        changeBanner(routeStatus.trend)
      }

      const gamingRouteClicked = () => {
        changeInActiveRoute(routeStatus.game)
        changeBanner(routeStatus.game)
      }

      const savedVideosRouteClicked = () => {
        changeInActiveRoute(routeStatus.saved)
        changeBanner(routeStatus.saved)
      }

      return (
        <MenuPopupListCon>
          <MenuListItem
            outline={(activeRoute === routeStatus.home).toString()}
            key="home"
          >
            <RouteLink to="/" onClick={homeRouteClicked}>
              <RouteButton>
                <HomeIcon
                  outline={(activeRoute === routeStatus.home).toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === routeStatus.home).toString()}>
                Home
              </MenuName>
            </RouteLink>
          </MenuListItem>

          <MenuListItem
            outline={(activeRoute === routeStatus.trend).toString()}
            key="trending"
          >
            <RouteLink to="/trending" onClick={trendingRouteClicked}>
              <RouteButton>
                <TrendingIcon
                  outline={(activeRoute === routeStatus.trend).toString()}
                />
              </RouteButton>
              <MenuName
                outline={(activeRoute === routeStatus.trend).toString()}
              >
                Trending
              </MenuName>
            </RouteLink>
          </MenuListItem>

          <MenuListItem
            outline={(activeRoute === routeStatus.game).toString()}
            key="gaming"
          >
            <RouteLink to="/gaming" onClick={gamingRouteClicked}>
              <RouteButton>
                <GamingIcon
                  outline={(activeRoute === routeStatus.game).toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === routeStatus.game).toString()}>
                Gaming
              </MenuName>
            </RouteLink>
          </MenuListItem>

          <MenuListItem
            outline={(activeRoute === routeStatus.saved).toString()}
            key="saved-videos"
          >
            <RouteLink to="/saved-videos" onClick={savedVideosRouteClicked}>
              <RouteButton>
                <SavedVideosIcon
                  outline={(activeRoute === routeStatus.saved).toString()}
                />
              </RouteButton>
              <MenuName
                outline={(activeRoute === routeStatus.saved).toString()}
              >
                Saved videos
              </MenuName>
            </RouteLink>
          </MenuListItem>
        </MenuPopupListCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(RoutesShortCut)

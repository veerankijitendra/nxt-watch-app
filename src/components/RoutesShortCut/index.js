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
          <RouteLink to="/" onClick={homeRouteClicked}>
            <MenuListItem
              outline={(activeRoute === routeStatus.home).toString()}
            >
              <RouteButton>
                <HomeIcon
                  outline={(activeRoute === routeStatus.home).toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === routeStatus.home).toString()}>
                Home
              </MenuName>
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/trending" onClick={trendingRouteClicked}>
            <MenuListItem
              outline={(activeRoute === routeStatus.trend).toString()}
            >
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
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/gaming" onClick={gamingRouteClicked}>
            <MenuListItem
              outline={(activeRoute === routeStatus.game).toString()}
            >
              <RouteButton>
                <GamingIcon
                  outline={(activeRoute === routeStatus.game).toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === routeStatus.game).toString()}>
                Gaming
              </MenuName>
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/saved-videos" onClick={savedVideosRouteClicked}>
            <MenuListItem
              outline={(activeRoute === routeStatus.saved).toString()}
            >
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
            </MenuListItem>
          </RouteLink>
        </MenuPopupListCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(RoutesShortCut)

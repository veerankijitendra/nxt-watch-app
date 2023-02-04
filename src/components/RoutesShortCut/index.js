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

const RoutesShortCut = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {changeInActiveRoute, activeRoute} = value
      const homeRouteClicked = () => {
        changeInActiveRoute('home')
      }

      const trendingRouteClicked = () => {
        changeInActiveRoute('trending')
      }

      const gamingRouteClicked = () => {
        changeInActiveRoute('gaming')
      }

      const savedVideosRouteClicked = () => {
        changeInActiveRoute('savedVideos')
      }

      return (
        <MenuPopupListCon>
          <RouteLink to="/" onClick={homeRouteClicked}>
            <MenuListItem outline={(activeRoute === 'home').toString()}>
              <RouteButton>
                <HomeIcon outline={(activeRoute === 'home').toString()} />
              </RouteButton>
              <MenuName outline={(activeRoute === 'home').toString()}>
                Home
              </MenuName>
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/" onClick={trendingRouteClicked}>
            <MenuListItem outline={(activeRoute === 'trending').toString()}>
              <RouteButton>
                <TrendingIcon
                  outline={(activeRoute === 'trending').toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === 'trending').toString()}>
                Trending
              </MenuName>
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/" onClick={gamingRouteClicked}>
            <MenuListItem outline={(activeRoute === 'gaming').toString()}>
              <RouteButton>
                <GamingIcon outline={(activeRoute === 'gaming').toString()} />
              </RouteButton>
              <MenuName outline={(activeRoute === 'gaming').toString()}>
                Gaming
              </MenuName>
            </MenuListItem>
          </RouteLink>

          <RouteLink to="/" onClick={savedVideosRouteClicked}>
            <MenuListItem outline={(activeRoute === 'savedVideos').toString()}>
              <RouteButton>
                <SavedVideosIcon
                  outline={(activeRoute === 'savedVideos').toString()}
                />
              </RouteButton>
              <MenuName outline={(activeRoute === 'savedVideos').toString()}>
                Saved videos
              </MenuName>
            </MenuListItem>
          </RouteLink>
        </MenuPopupListCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default RoutesShortCut

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import RoutesShortCut from '../RoutesShortCut'

import LogoutPopUp from '../LogoutPopUp'

import {
  HeaderImage,
  ProfileImage,
  LowTierIconsCon,
  HighTierIconCon,
  HeaderButton,
  MenuIcon,
  CloseIcon,
  ChangeModeSun,
  ChangeModeMoon,
  HeaderBg,
  PopUpBG,
  PopUpButtonCon,
  PopUpRoutesCon,
  LowEndHide,
  ProfileButton,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTheBGMode} = value

      const onClickBGChange = () => {
        changeTheBGMode()
      }

      const BgColor = isDarkMode ? '#181818' : '#f9f9f9'
      const overlayStyles = {
        width: '100%',
        height: '100vh',
        backgroundColor: BgColor,
      }

      const popUpComponent = () => (
        <LowEndHide>
          <Popup
            modal
            trigger={
              <HeaderButton type="button">
                <MenuIcon isdarkmode={isDarkMode.toString()} />
              </HeaderButton>
            }
            overlayStyle={overlayStyles}
            position="center"
          >
            {close => (
              <PopUpBG>
                <PopUpButtonCon>
                  <HeaderButton
                    onClick={() => {
                      close()
                    }}
                  >
                    <CloseIcon outline={isDarkMode.toString()} />
                  </HeaderButton>
                </PopUpButtonCon>
                <PopUpRoutesCon>
                  <RoutesShortCut />
                </PopUpRoutesCon>
              </PopUpBG>
            )}
          </Popup>
        </LowEndHide>
      )

      const modeChangeComponent = () => (
        <HeaderButton
          type="button"
          data-testId="theme"
          onClick={onClickBGChange}
        >
          {isDarkMode ? <ChangeModeSun /> : <ChangeModeMoon />}
        </HeaderButton>
      )

      const image = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderBg isDarkMode={isDarkMode.toString()} key="header">
          <Link to="/">
            <HeaderImage src={image} alt="website logo" />
          </Link>
          <LowTierIconsCon>
            {modeChangeComponent()}
            {popUpComponent()}
            <ProfileButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />
            </ProfileButton>

            <LogoutPopUp />
          </LowTierIconsCon>
        </HeaderBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)

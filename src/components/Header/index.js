import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'

import RoutesShortCut from '../RoutesShortCut'

import {
  HeaderImage,
  ProfileImage,
  LowTierIconsCon,
  HighTierIconCon,
  HeaderButton,
  LogoutButton,
  LogoutIcon,
  MenuIcon,
  CloseIcon,
  ChangeModeSun,
  ChangeModeMoon,
  HeaderBg,
  PopUpBG,
  PopUpButtonCon,
  PopUpRoutesCon,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode, changeTheBGMode} = value

      const onClickLogout = () => {
        console.log('log out')
      }

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
        <>
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
        </>
      )

      const modeChangeComponent = () => (
        <HeaderButton type="button">
          {isDarkMode ? (
            <ChangeModeSun onClick={onClickBGChange} />
          ) : (
            <ChangeModeMoon onClick={onClickBGChange} />
          )}
        </HeaderButton>
      )

      return (
        <HeaderBg isDarkMode={isDarkMode.toString()}>
          <HeaderImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="logo"
          />
          <LowTierIconsCon>
            {modeChangeComponent()}
            {popUpComponent()}
            <HeaderButton type="button" onClick={onClickLogout}>
              <LogoutIcon isdarkmode={isDarkMode.toString()} />
            </HeaderButton>
          </LowTierIconsCon>
          <HighTierIconCon>
            {modeChangeComponent()}
            <HeaderButton type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                alt="profile"
              />
            </HeaderButton>
            <LogoutButton type="button" onClick={onClickLogout}>
              Logout
            </LogoutButton>
          </HighTierIconCon>
        </HeaderBg>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)

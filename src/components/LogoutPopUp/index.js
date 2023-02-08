import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'

import {withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LogoutIcon,
  IconButton,
  LogoutButton,
  PopUpButton,
  MainCon,
  ButtonCon,
  LogoutPara,
  CancelButton,
} from './styledComponent'

const LogoutPopUp = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const overlayStyles = {
        margin: 0,
        padding: 0,
      }

      const removeCookie = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      return (
        <>
          <Popup
            modal
            trigger={
              <div>
                <IconButton type="button">
                  <LogoutIcon outline={isDarkMode.toString()} />
                </IconButton>
                <LogoutButton type="button"> Logout </LogoutButton>
              </div>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <MainCon outline={isDarkMode.toString()}>
                <LogoutPara outline={isDarkMode.toString()}>
                  Are you sure you want to logout?
                </LogoutPara>
                <ButtonCon>
                  <CancelButton
                    type="button"
                    onClick={() => {
                      close()
                    }}
                  >
                    Cancel
                  </CancelButton>

                  <PopUpButton type="button" onClick={removeCookie}>
                    Confirm
                  </PopUpButton>
                </ButtonCon>
              </MainCon>
            )}
          </Popup>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(LogoutPopUp)

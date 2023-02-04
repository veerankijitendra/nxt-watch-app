import {FiLogIn} from 'react-icons/fi'
import {ImSun} from 'react-icons/im'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMoon} from 'react-icons/io5'
import {AiOutlineClose} from 'react-icons/ai'

import styled from 'styled-components'
import {Button} from '../../styledComponent'

export const HeaderImage = styled.img`
  width: 24%;
  height: 36%;

  min-width: 80px;

  max-width: 140px;
  height: 28px;
`
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`
export const HeaderBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props =>
    props.isDarkMode === 'true' ? '#0f0f0f' : '#f8fafc'};

  padding: 1rem 2rem;

  height: 80px;
`

export const LowTierIconsCon = styled.div`
  width: 20%;
  min-width: 120px;
  display: flex;
  justify-content: space-between;

  @media all and (min-width: 767px) {
    display: none;
  }
`
export const HighTierIconCon = styled.div`
  @media all and (max-width: 767px) {
    display: none;
  }
  width: 20%;
  min-width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

export const CloseIcon = styled(AiOutlineClose)`
  height: 100%;
  width: 100%;
  color: ${props => (props.outline === 'true' ? '#f8f8f8' : '#101010')};
`

export const HeaderButton = styled(Button)`
  width: 50%;
  height: 50%;

  max-width: 28px;

  @media all and (min-width: 767px) {
    max-width: 36px;
  }

  padding: 0;

  background-color: transparent;
`
export const LogoutButton = styled(Button)`
  width: 100px;

  border: 2px solid #3b82f6;
  border-radius: 4px;

  background-color: transparent;

  color: #3b82f6;

  font-size: 16px;
  font-weight: 500;
`

export const LogoutIcon = styled(FiLogIn)`
  height: 100%;
  width: 100%;

  color: ${props => (props.isdarkmode === 'true' ? '#ffffff' : '#181818')};
`
export const MenuIcon = styled(GiHamburgerMenu)`
  height: 100%;
  width: 100%;

  color: ${props => (props.isdarkmode === 'true' ? '#ffffff' : '#181818')};
`
export const ChangeModeSun = styled(ImSun)`
  height: 100%;
  width: 100%;

  color: #ffffff;
`
export const ChangeModeMoon = styled(IoMoon)`
  height: 100%;
  width: 100%;

  color: #181818;
`

export const PopUpBG = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const PopUpButtonCon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  min-height: 50vh;
`
export const PopUpRoutesCon = styled.div`
  min-height: 50vh;
  width: 100%;
`

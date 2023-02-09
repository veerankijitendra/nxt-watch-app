import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {Button} from '../../styledComponent'

export const RouteLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const MenuPopupListCon = styled.ul`
  width: 100%;

  padding: 0;
  margin: 0;

  list-style: none;
  display: flex;
  flex-direction: column;
`

export const MenuListItem = styled.li`
  font-family: 'Roboto';
  flex-grow: 1;
  background-color: ${props => (props.outline === 'true' ? '#cccccc' : null)};

  display: flex;
  align-items: center;

  height: 32px;
  margin-bottom: 8px;
`
export const MenuName = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 15px;
  font-weight: ${props => (props.outline === 'true' ? '600' : '400')};

  color: #7e858e;

  // Hex: #ebebeb
  // Hex: #7e858e
  //#909090
`
export const RouteButton = styled(Button)`
  height: 1.5rem;

  background-color: transparent;

  margin: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeIcon = styled(AiFillHome)`
  height: 100%;
  width: 100%;

  color: ${props => (props.outline === 'true' ? '#ff0000' : '#909090')};
`
export const TrendingIcon = styled(FaFire)`
  height: 100%;
  width: 100%;

  color: ${props => (props.outline === 'true' ? '#ff0000' : '#909090')};
`
export const GamingIcon = styled(SiYoutubegaming)`
  height: 100%;
  width: 100%;

  color: ${props => (props.outline === 'true' ? '#ff0000' : '#909090')};
`
export const SavedVideosIcon = styled(BiListPlus)`
  height: 100%;
  width: 100%;

  color: ${props => (props.outline === 'true' ? '#ff0000' : '#909090')};
`

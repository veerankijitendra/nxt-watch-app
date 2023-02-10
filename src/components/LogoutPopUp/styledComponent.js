import styled from 'styled-components'

import {FiLogIn} from 'react-icons/fi'

import {Button} from '../../styledComponent'

const color = {
  dark: '#ffffff',
  lite: '#181818',
  bgLite: '#f8fafc',
  bgDark: '#231f20',

  paraLite: '#3b82f6',
  paraDark: '#ebebeb',
}

export const MainCon = styled.div`
  background-color: ${props =>
    props.outline === 'true' ? color.bgDark : color.bgLite};

  width: 25rem;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';

  box-shadow: 0.5px 0.2px 0.3px 1px #231f20;
`
export const ButtonCon = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`

export const LogoutPara = styled.p`
  color: ${props =>
    props.outline === 'true' ? color.paraDark : color.paraLite};

  font-weight: 500;
  margin: 2rem 0;
  font-size: 1.3rem;
`

export const IconButton = styled(Button)`
  width: 28px;

  @media all and (min-width: 767px) {
    width: 6.2rem;
    height: 2.8rem;

    background-color: #3b82f6;

    color: #ffffff;

    font-size: 16px;
    font-weight: 500;
  }

  padding: 0;

  background-color: transparent;
`
export const Span = styled.span`
  @media all and (max-width: 767px) {
    display: none;
  }
`

export const PopUpButton = styled(Button)`
  width: 6.2rem;
  height: 2.8rem;

  background-color: #3b82f6;

  color: #cbd5e1;

  font-size: 16px;
  font-weight: 500;
`
export const CancelButton = styled(PopUpButton)`
  background-color: transparent;
  border: 1.5px solid #64748b;
  color: #64748b;
`

export const LogoutButton = styled(PopUpButton)`
  @media all and (max-width: 767px) {
    display: none;
  }
  display: inline;
`

export const LogoutIcon = styled(FiLogIn)`
  height: 100%;
  width: 100%;

  color: ${props => (props.outline === 'true' ? color.dark : color.lite)};
  @media all and (min-width: 767px) {
    display: none;
  }
`

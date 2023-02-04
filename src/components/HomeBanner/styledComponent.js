import styled from 'styled-components'

import {AiOutlineClose} from 'react-icons/ai'

import {Button} from '../../styledComponent'

export const HomeBannerImage = styled.img`
  width: 10rem;
  height: 2.5rem;
`
export const HomeBannerCon = styled.div`
  font-family: 'Roboto';
  width: 100%;
  min-height: 220px;
  height: 10vh;

  padding: 1rem;

  @media all and (min-width: 576px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
    background-size: cover;

    padding: 1.5rem 2rem 1rem 1rem;
  }
`
export const HomeBannerImageCloseIconCon = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HomeBannerPara = styled.p`
  line-height: 2;

  font-size: 18px;

  color: #00306e;
`
export const HomeBannerButton = styled(Button)`
  background-color: transparent;

  height: 2.5rem;
  width: 8rem;

  font-size: 16px;

  color: #00306e;
  border: 2px solid #00306e;
  border-radius: 0;
`
export const HomeBannerCloseIcon = styled(AiOutlineClose)`
  height: 16px;
  width: 16px;

  @media all and (min-width: 576px) {
    height: 20px;
    width: 20px;
  }
`

import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

export const BannerCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: ${props =>
    props.outline === 'true' ? '#212121' : '#ebebeb'};
`

export const BannerTrendingIcon = styled(FaFire)`
  width: 60%;
  height: 60%;
`

export const BannerGamingIcon = styled(SiYoutubegaming)`
  width: 60%;
  height: 60%;
`

export const BannerSavedVideoIcon = styled(BiListPlus)`
  width: 60%;
  height: 60%;
`

export const BannerIconCon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.5rem;

  color: #ff0000;

  background-color: ${props =>
    props.outline === 'true' ? '#1e293b' : '#d7dfe9'};
`
export const BannerHeading = styled.h1`
  color: ${props => (props.outline === 'true' ? '#f9f9f9' : '#1e293b')};
`

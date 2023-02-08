import styled from 'styled-components'

import {BiListPlus} from 'react-icons/bi'
import {
  AiFillLike,
  AiFillDislike,
  AiOutlineLike,
  AiOutlineDislike,
} from 'react-icons/ai'

import {Button} from '../../styledComponent'

const color = {
  titleLite: '#00306e',
  titleDark: '#e2e8f0',
  viewsLite: '#94a3b8',
  viewsDark: '#e2e8f0',
}

export const VideoItemBG = styled.div`
  @media all and (max-width: 576px) {
    margin: 2rem 1rem;
  }
  margin: 2rem;

  font-family: 'Roboto';
`

export const VITitle = styled.p`
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
`

export const VIViewsTimeLineCon = styled.ul`
  padding: 0;
  font-family: 'Roboto';
  font-size: 1.05rem;
  font-weight: 400;

  display: flex;
`

export const VIViewsSubscriberElement = styled.li`
  color: ${props =>
    props.outline === 'true' ? color.viewsDark : color.viewsLite};
  list-style-type: none;
`
export const VITimePeriodElement = styled.li`
  color: ${props =>
    props.outline === 'true' ? color.viewsDark : color.viewsLite};

  margin: 0;
  margin-left: 2.5rem;
`
export const VIIconsCon = styled.ul`
  padding: 0;
  display: flex;
  margin: 2rem 0;
`

export const VIIconListElement = styled.li`
  color: ${props =>
    props.outline === 'true' ? color.viewsDark : color.viewsLite};
  list-style-type: none;

  margin-right: 1rem;
`
export const VIButton = styled(Button)`
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 2rem;

  font-size: 1.2rem;
  font-weight: 500;

  color: #64748b;
`

export const VIButtonClicked = styled(VIButton)`
  font-weight: 600;
  color: '#2563eb';
`

export const IconName = styled.span`
  margin-left: 0.6rem;
`
export const VIBreakElement = styled.hr`
  border-width: 1px;
  border-color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
`

export const LikeIcon = styled(AiOutlineLike)`
  width: 100%;
  height: 100%;
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
`

export const LikedIcon = styled(AiFillLike)`
  width: 100%;
  height: 100%;
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLIte};
`

export const DisLikeIcon = styled(AiOutlineDislike)`
  width: 100%;
  height: 100%;
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
`

export const DisLikedIcon = styled(AiFillDislike)`
  width: 100%;
  height: 100%;
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
`

export const SavedIcon = styled(BiListPlus)`
  width: 100%;
  height: 100%;
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};
`

export const VIThumbnailImg = styled.img`
  width: 3.8rem;
  height: 3.8rem;

  border-radius: 50%;

  margin-right: 1.5rem;
`
export const VIChannelName = styled.p`
  color: ${props =>
    props.outline === 'true' ? color.titleDark : color.titleLite};

  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto';
`

export const VISubscribers = styled(VIChannelName)`
  color: ${props =>
    props.outline === 'true' ? color.viewsDark : color.viewsLite};
`
export const VIChannelDescription = styled(VIChannelName)`
  line-height: 1.5;
`

export const VIThumbnailAndChannelCon = styled.div`
  display: flex;
  align-items: center;
`

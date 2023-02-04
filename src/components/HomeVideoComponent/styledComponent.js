import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HomeChannelImageAndDetailsCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 1rem;

  width: 100%;
`

export const HomeLinkComponent = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);

  margin-bottom: 3rem;

  @media all and (min-width: 576px) and (max-width: 767px) {
    width: 49%;
    margin: 1rem 0 2rem 0;
  }

  @media all and (min-width: 767px) and (max-width: 992px) {
    min-width: 31%;
    max-width: 47%;
    margin: 0 1rem 1rem 0;
  }

  @media all and (min-width: 992px) {
    min-width: 24%;
    max-width: 29%;
    margin: 0 1rem 1rem 0;
  }
`

export const HomeComponentImage = styled.img`
  width: 100%;
  height: 12rem;
`

export const HomeComponentDetailsCon = styled.div`
  flex-grow: 1;
`

export const HomeComponentChannelImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 25%;
  margin: 0 1rem;
`
export const HomeComponentDescription = styled.p`
  color: ${props => (props.outline === 'true' ? '#f1f1f1' : '#00306e')};

  font-family: 'Roboto';
  font-size: 0.95rem;

  line-height: 1.5;

  margin: 0;
  margin-bottom: 1rem;
`
export const HomeComponentChanelCon = styled.ul`
  padding: 0;

  display: flex;
`
export const HomeComponentChanelListInfo = styled.li`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  margin-right: 1.5rem;

  margin: auto;

  @media all and (min-width: 576px) and (max-width: 767px) {
    margin-right: 1rem;
  }

  font-weight: 500;

  color: ${props => (props.outline === 'true' ? '#7e858e' : '#00306e')};
`

export const HomeComponentChanelName = styled.li`
  list-style: none;
  width: 33.33%;
  display: flex;
  flex-wrap: wrap;

  font-size: 0.85rem;
  font-weight: 500;

  color: ${props => (props.outline === 'true' ? '#7e858e' : '#00306e')};
`

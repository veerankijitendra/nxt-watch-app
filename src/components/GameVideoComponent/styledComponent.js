import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkCom = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  margin: 0 1rem 2rem 0;

  width: 45%;

  @media all and (min-width: 577px) {
    min-width: 30%;
    max-width: 200px;
  }

  @media all and (min-width: 767px) {
    min-width: 18%;
    max-width: 210px;
  }
`

export const GamingComponentCon = styled.div`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ParaDescription = styled.p`
  color: ${props => (props.outline === 'true' ? '#f1f1f1' : '#00306e')};

  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 700;

  margin: 1rem 0 0.5rem 0;
`

export const ViewsElement = styled.p`
  font-family: 'Roboto';
  font-size: 1.2rem;

  color: ${props => (props.outline === 'true' ? '#7e858e' : '#4f46e5')};

  margin: 1rem 0 0.5rem 0;
  line-height: 1.5;
`

export const GamingImage = styled.img`
  width: 100%;
  height: 13rem;
  flex-grow: 1;

  @media all and (min-width: 767px) {
    height: 11rem;
  }
`

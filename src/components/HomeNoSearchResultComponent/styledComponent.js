import styled from 'styled-components'

import {Button} from '../../styledComponent'

export const NoResultCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 3rem;
`

export const NoResultImage = styled.img`
  height: 12rem;
  width: 15rem;
  margin-bottom: 1rem;

  @media all and (min-width: 768px) {
    height: 15rem;
    width: 20rem;
  }
`

export const NoResultHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 1.2rem;

  color: ${props => (props.outline === 'true' ? '#f9f9f9' : '#00306e')};

  @media all and (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const NoResultPara = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;

  @media all and (min-width: 768px) {
    font-size: 1.2rem;
  }
`
export const NoResultButton = styled(Button)`
  height: 2rem;
  width: 5.5rem;

  @media all and (min-width: 768px) {
    height: 3rem;
    width: 7rem;
    font-size: 1rem;
  }

  font-weight: 700;
  color: #f8fafc;
  background-color: #3b82f6;

  border: none;
`

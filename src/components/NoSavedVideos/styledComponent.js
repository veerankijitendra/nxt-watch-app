import styled from 'styled-components'

const color = {
  dark: '#ebebeb',
  lite: '#231f20',
}

export const NoSavedVideosCon = styled.div`
  font-family: 'Roboto';
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`

export const Image = styled.img`
  width: 80%;

  @media all and (max-width: 576px) {
    height: 18rem;
    margin-top: 2rem;
  }
  height: 22rem;
`

export const Heading = styled.h1`
  color: ${props => (props.outline === 'true' ? color.dark : color.lite)};
  line-height: 2;
`

export const Para = styled.p`
  color: ${props => (props.outline === 'true' ? color.dark : color.lite)};
  font-size: 1.2rem;
`

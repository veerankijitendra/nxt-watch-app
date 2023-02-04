import styled from 'styled-components'

export const NxtWatchBG = styled.div`
  min-height: 100vh;

  background-color: ${props => (props.bgColor ? '#1e293b' : '#f9f9f9')};
`

export const NxtWatchImage = styled.img`
  width: 138px;
  height: 32px;
`
export const Button = styled.button`
  outline: none;
  cursor: pointer;

  border: none;
  border-radius: 6px;

  font-family: 'Roboto';
`

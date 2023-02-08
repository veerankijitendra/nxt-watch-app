import styled from 'styled-components'

const color = {
  headingDark: '#ebebeb',
  headingLite: '#00306e',
  paraDark: '#ebebeb',
  paraLite: '#64748b',
  fontWeight: 400,
}

export const SavedItemCon = styled.div`
  width: 100%;
  height: 14rem;
  display: flex;
  margin: 1.5rem;
  @media all and (min-width: 767px) {
    width: 70%;
  }
`

export const Image = styled.img`
  width: 48%;
  height: 100%;
  margin-right: 1rem;

  @media all and (min-width: 767px) {
    width: 48%;
  }
`
export const Heading = styled.p`
  color: ${props =>
    props.outline === 'true' ? color.headingDark : color.headingLite};
  font-size: 1.2rem;
  @media all and (min-width: 767px) {
    font-size: 1.4rem;
  }
  font-weight: 800;
`

export const Para = styled.p`
  color: ${props =>
    props.outline === 'true' ? color.paraDark : color.paraLite};
  font-size: 1.1rem;
  font-weight: ${color.fontWeight};
`

export const TimePeriodElement = styled.li`
  color: ${props =>
    props.outline === 'true' ? color.paraDark : color.paraLite};

  font-size: 1.1rem;

  margin: 0;
  margin-left: 2.5rem;
`
export const Con = styled.ul`
  padding: 0;
  display: flex;
  margin: 2rem 0;
  font-weight: ${color.fontWeight};
`

export const ListElement = styled.li`
  color: ${props =>
    props.outline === 'true' ? color.paraDark : color.paraLite};
  list-style-type: none;

  margin-right: 1rem;

  font-size: 1.1rem;
  font-weight: ${color.fontWeight};
`

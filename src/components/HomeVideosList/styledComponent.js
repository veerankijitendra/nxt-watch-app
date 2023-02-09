import styled from 'styled-components'

export const VideosListCon = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media all and (min-width: 576px) {
    padding: 2rem 1rem;
    justify-content: space-between;
  }
`

export const Future = styled.div`
  color: #fff;
`

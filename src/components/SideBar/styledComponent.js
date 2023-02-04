import styled from 'styled-components'

export const SideBarCon = styled.div`
  background-color: ${props =>
    props.outline === 'true' ? '#0f0f0f' : '#f8fafc'};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - 80px);
`
export const Div = styled.div``

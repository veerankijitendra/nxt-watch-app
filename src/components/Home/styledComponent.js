import styled from 'styled-components'

export const HomeBG = styled.div`
  height: 100%;
  min-height: 810px;

  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`

export const SideBarCon = styled.div`
  @media all and (max-width: 767px) {
    display: none;
  }

  min-width: 12rem;
  width: 15%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #00000;
`

export const SideBarConAndHomeBanner = styled.div`
  display: flex;
  min-height: calc(100% - 100px);
`

export const HomeBannerAndHomeComponent = styled.div`
  @media all and (max-width: 767px) {
    width: 100%;
  }
  width: calc(100% - 15%);
  min-height: calc(100% - 10vh);
  display: flex;
  flex-direction: column;
`

export const LoadingComponent = styled.div`
  min-height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`

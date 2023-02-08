import styled from 'styled-components'

import {AiOutlineSearch} from 'react-icons/ai'

import {Button} from '../../styledComponent'

export const BG = styled.div`
  height: 100%;
  min-height: 810px;

  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const HeaderBG = styled.div`
  background-color: ${props =>
    props.outline === 'true' ? '#181818' : '#f1f1f1'};
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

  background-color: ${props =>
    props.outline === 'true' ? '#181818' : '#f1f1f1'};
`

export const SideBarConAndBanner = styled.div`
  display: flex;
  min-height: calc(100% - 100px);
`

export const BannerAndRouteComponent = styled.div`
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

export const SearchElementCon = styled.div`
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 2rem 2rem 1rem;

  border: 1px solid #e2e8f0;

  max-width: 600px;
`
export const SearchElement = styled.input`
  width: 80%;
  height: 100%;

  outline: none;
  border: none;

  font-weight: 600;
  padding-left: 0.5rem;
  font-size: 1rem;

  flex-grow: 1;

  background-color: transparent;
  color: ${props => (props.outline === 'true' ? '#f8fafc' : '#1e293b')};
`
export const SearchButton = styled(Button)`
  height: 100%;
  width: 15%;

  border: 1px solid #e2e8f0;
  border-radius: 0;
`
export const SearchIcon = styled(AiOutlineSearch)`
  width: 80%;
  height: 80%;

  color: #475569;
`

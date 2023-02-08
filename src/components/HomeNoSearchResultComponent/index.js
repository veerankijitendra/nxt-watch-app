import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoResultButton,
  NoResultCon,
  NoResultHeading,
  NoResultImage,
  NoResultPara,
} from './styledComponent'

const HomeNoSearchResultComponent = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <NoResultCon>
          <NoResultImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoResultHeading outline={isDarkMode.toString()}>
            No Search result found
          </NoResultHeading>
          <NoResultPara>
            Try different key words or remove search filter
          </NoResultPara>
          <NoResultButton type="button">Retry</NoResultButton>
        </NoResultCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeNoSearchResultComponent

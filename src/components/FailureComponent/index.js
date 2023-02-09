import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoResultButton,
  NoResultCon,
  NoResultHeading,
  NoResultImage,
  NoResultPara,
} from '../HomeNoSearchResultComponent/styledComponent'

const FailureComponent = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const {reloadAPI} = props
      const reFetchTheAPI = () => {
        reloadAPI()
      }

      const image = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      return (
        <NoResultCon>
          <NoResultImage src={image} alt="failure view" />
          <NoResultHeading outline={isDarkMode.toString()}>
            Oops! Something Went Wrong
          </NoResultHeading>
          <NoResultPara>
            We are having some trouble to complete your request. Please try
            again.
          </NoResultPara>
          <NoResultButton type="button" onClick={reFetchTheAPI}>
            Retry
          </NoResultButton>
        </NoResultCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FailureComponent

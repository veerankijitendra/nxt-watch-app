import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NoResultCon,
  NoResultHeading,
  NoResultImage,
  NoResultPara,
} from './styledComponent'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const image = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NoResultCon>
          <NoResultImage src={image} alt="not found" />
          <NoResultHeading outline={isDarkMode.toString()}>
            Page Not Found
          </NoResultHeading>
          <NoResultPara>
            we are sorry, the page you requested could not be found.
          </NoResultPara>
        </NoResultCon>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound

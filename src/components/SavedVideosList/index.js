import SavedItem from '../SavedItem'

const SavedVideosList = props => {
  const {videosList} = props

  return videosList.map(each => <SavedItem video={each} />)
}

export default SavedVideosList

import HomeVideoComponent from '../HomeVideoComponent'

import {HomeVideosListCon} from './styledComponent'

const HomeVideosList = props => {
  const {videos} = props
  return (
    <HomeVideosListCon>
      {videos.map(each => (
        <HomeVideoComponent video={{...each}} />
      ))}
    </HomeVideosListCon>
  )
}

export default HomeVideosList

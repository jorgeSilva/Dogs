import React from 'react'
import {UserContext} from '../../../UserContext'
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm'
import style from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentSection = React.useRef(null)
  const {login} = React.useContext(UserContext)

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentSection} className={`${style.comments} ${props.single ? style.single : ''}`}>
        {comments.map(item => <li key={item.comment_ID}>
          <b>{item.comment_author}: </b>
          <span>{item.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
import {createContext, useState} from 'react'
import {v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
  {
    id: 1,
    text: "Simple feedback phrase 1",
    rating: 10
  },
  {
    id: 2,
    text: "Simple feedback phrase 2",
    rating: 6
  },
  {
    id: 3,
    text: "Simple feedback phrase 3",
    rating: 4
  }
 ])

  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false
  })
 
  const addFeedback = (newFeedback) => {
    newFeedback.uid = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => {
      return item.id === id? {...item, ...updItem}: item
    }))
  }

  return (
    <FeedbackContext.Provider
        value={{
          feedback,
          feedbackEdit,
          deleteFeedback,
          addFeedback,
          editFeedback,
          updateFeedback
        }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
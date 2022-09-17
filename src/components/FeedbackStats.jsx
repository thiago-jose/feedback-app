import {useContext, React} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

  // Calculate average rating
  let average = feedback.reduce((acc, item) => {
      return acc + item.rating
  }, 0)

  average = (average / feedback.length).toFixed(1).replace('[.,]0$', '')

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating: {isNaN(average)? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
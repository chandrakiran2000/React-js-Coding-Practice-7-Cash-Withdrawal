// Write your code here
import './index.css'

const DenominationItem = props => {
  const {lists, onbtn} = props
  const {id, value} = lists
  const withdrawBtn = () => {
    onbtn(value)
  }

  return (
    <li className="li" id={id}>
      <button onClick={withdrawBtn} className="btn" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

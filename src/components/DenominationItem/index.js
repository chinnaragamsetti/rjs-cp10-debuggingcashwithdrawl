// Write your code here
import './index.css'

const DenominationItem = props => {
  const {listdetails, decreasetotalamount} = props
  const {value} = listdetails

  const Decrease = () => {
    decreasetotalamount(value)
  }
  return (
    <li>
      <button type="button" onClick={Decrease} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

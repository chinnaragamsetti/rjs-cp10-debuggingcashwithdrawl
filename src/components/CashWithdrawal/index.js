// Write your code here

import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawl extends Component {
  state = {rupees: 2000}

  onWithdrawlamount = value => {
    this.setState(prevState => ({rupees: prevState.rupees - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {rupees} = this.state
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <div className="profilecontainer">
            <div className="imagecontainer">
              <h1 className="image">S</h1>
            </div>

            <p className="name">Sarah Williams</p>
          </div>
          <div className="balancecontainer">
            <p className="yourbalance">Your Balance</p>
            <div className="amountcontainer">
              <p className="amount">{rupees}</p>
              <p className="inrupees">In Rupees</p>
            </div>
          </div>
          <p className="withdrawl">Withdrawl</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttonscontainer">
            {denominationsList.map(eachlist => (
              <DenominationItem
                key={eachlist.id}
                listdetails={eachlist}
                decreasetotalamount={this.onWithdrawlamount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl

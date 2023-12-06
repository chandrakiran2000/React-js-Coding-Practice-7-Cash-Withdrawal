// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  debitAmount = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props

    return (
      <div className="main-bg">
        <div className="cashwithdrawal-card">
          <div className="name-card">
            <h1 className="circle-letter">S</h1>
            <p className="name">Sarah Williams</p>
          </div>

          <div className="balance-card">
            <p className="yourbalance-text">Your Balance</p>
            <div className="amount-card">
              <p className="amount">{amount}</p>
              <p className="rupee-text">In Rupees</p>
            </div>
          </div>

          <div className="withdraw-card">
            <p className="withdraw-text">Withdraw</p>
            <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul className="withdrwal-btns-card">
            {denominationsList.map(each => (
              <DenominationItem
                onbtn={this.debitAmount}
                lists={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

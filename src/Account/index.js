import React, { Component } from 'react';


class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
            balance: 0
        }
    }

    handleDepositClick = (event) => {
        // It is good practice to still prevent default behavior
        event.preventDefault()
        // set a local variable to the amount entered in the text box.
        const amount = parseInt(this.inputBox.value, 10)
        if (this.inputBox.value === '') {
            return false;
        }  else if (isNaN(amount)) {
            this.inputBox.value = ''
            return false;
        } else { // set a local variable to the new balance based off of the original balance + amount
            const newBalance = this.state.balance + amount
            // set the balance to the newBalance using the setState method (necessary)
            this.setState({
                balance: newBalance
            })
        }
        // empty out the text box in this component
        this.inputBox.value = ''
    }

    handleWithdrawClick = (event) => {
        event.preventDefault()
        const amount = parseInt(this.inputBox.value, 10)
        if (this.inputBox.value === '') {
            return false;
        } else if (isNaN(amount)) {
            this.inputBox.value = ''
            return false;
        } else if (this.inputBox.value > this.state.balance) {
            this.inputBox.value = ''
            return false;
        } else {
            const newBalance = this.state.balance - amount
            this.setState({
                balance: newBalance
            })
            this.inputBox.value = ''
        }
    }

    // handleTransferClick = (event) => {
    //     event.preventDefault()
    //     const amount = parseInt(this.inputBox.value, 10)
    //     if (this.inputBox.value === '') {
    //         return false;
    //     } else if (isNaN(amount)) {
    //         this.inputBox.value = ''
    //         return false;
    //     } else if (this.inputBox.value > this.state.balance) {
    //         this.inputBox.value = ''
    //         return false;
    //     } else {
    //         const newBalance = this.state.balance - amount
    //         this.setState({
    //             balance: newBalance
    //         })
    //         this.inputBox.value = ''
    //     }
    // }

    render() {

        return (
            <div className="account">
              <h2>{this.props.name}</h2>
              <div className="balance">${this.state.balance}</div>
                <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
                <div>
                    <input className="button" type="button" value="Deposit" onClick={this.handleDepositClick} />
                    <input className="button" type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
                    {/*<input className="button" type="button" value="Transfer" onClick={this.handleTransferClick} />*/}
                </div>
            </div>
        )
    }
}

export default Account;
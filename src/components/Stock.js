import React from 'react'

class Stock extends React.Component {
  state = {
    boughtStock: false
  }

  handleBuy = () => {
    this.setState((prevState) => ({
      boughtStock: true
    }), () => console.log(this.props.stock))
  }

  render() {
  return (
    <div>
      {this.state.boughtStock
        ? null
        : <div onClick={() => {this.props.handlePurchase(this.props.stock); this.handleBuy()}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.stock.name}</h5>
              <p className="card-text">{this.props.stock.price}</p>
            </div>
          </div>
        </div>
      }
    </div>
    )
  }
}

export default Stock

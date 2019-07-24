import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = ()=>{
    const {stocks, handleClick} = this.props
    return stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={handleClick}/>
    })
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.renderStocks()
        }
      </div>
    );
  }

}

export default StockContainer;

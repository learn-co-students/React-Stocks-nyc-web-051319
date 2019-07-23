import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => {
    let stocks = [...this.props.stocks]

    if (this.props.alphabet) {
      stocks = stocks.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
    } else if (this.props.price) {
      stocks = stocks.sort((a, b) => (a.price > b.price) ? 1 : -1)
    }

    switch (this.props.filter) {
      case 'All':
        return stocks.map(stock => {
          return < Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />
        })
      case 'Tech':
        return stocks.filter(stock => stock.type === 'Tech').map(stock => {
          return < Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />
        })
      case 'Sportswear':
        return stocks.filter(stock => stock.type === 'Sportswear').map(stock => {
          return < Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />
        })
      case 'Finance':
        return stocks.filter(stock => stock.type === 'Finance').map(stock => {
          return < Stock key={stock.id} stock={stock} handlePurchase={this.props.handlePurchase} />
        })
      default:
    }
  }

  render() {
    console.log(this.props.stocks)
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;

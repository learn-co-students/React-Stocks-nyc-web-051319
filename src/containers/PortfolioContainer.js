import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  displayStocks = () => {
    return this.props.stocks.map(stock => {
      return <Stock key={stock.id} stock={stock} handleClick={this.props.sellStock} />
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.displayStocks()}
      </div>
    );
  }

}

export default PortfolioContainer;

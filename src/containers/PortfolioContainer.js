import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  showStock(){
    return this.props.stocks.map(stock => {
      return (
        <ul onClick={() => this.props.sellStock(stock)}>
          <li>{stock.name}</li>
        </ul>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.stocks ? this.showStock() : null}
      </div>
    );
  }

}

export default PortfolioContainer;

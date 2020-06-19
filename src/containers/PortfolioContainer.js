import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} id={stock.id} stock={stock} eventHandler={this.props.sellStock} />)
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderPortfolio() 
          }
      </div>
    );
  }

}

export default PortfolioContainer;

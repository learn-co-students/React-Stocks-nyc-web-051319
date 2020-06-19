import React, { Component } from 'react';
import Stock from '../components/Stock'
import BoughtStock from '../components/BoughtStock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.foundStock.map(stock =>
      <BoughtStock name={stock.name} price={stock.price} id={stock.id} sell={this.props.sell}/>
    )
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;

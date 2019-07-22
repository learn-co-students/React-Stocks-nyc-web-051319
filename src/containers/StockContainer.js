import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderCards = () => {

    let sortedStocksByName = [...this.props.stocks].sort((a, b) =>
    (a.name.toLowerCase() > b.name.toLowerCase()) ? 1: -1)

    let sortedStocksByPrice = [...this.props.stocks].sort((a, b) => (a.price > b.price) ? 1: -1)

    let techStocks = this.props.stocks.filter(stock => stock.type === "Tech")

    let financeStocks = this.props.stocks.filter(stock => stock.type === "Finance")

    let sportsWearStocks = this.props.stocks.filter(stock => stock.type === "Sportswear")

    if (this.props.choice === "Tech") {
      return techStocks.map(stock => {
        return <Stock
          name={stock.name}
          price={stock.price}
          id={stock.id} addToPortfolio={this.props.addToPortfolio}
          foundStock={this.props.foundStock}
          />
        }
      )
    } else if (this.props.choice === "Finance") {
      return financeStocks.map(stock => {
        return <Stock
          name={stock.name}
          price={stock.price}
          id={stock.id} addToPortfolio={this.props.addToPortfolio}
          foundStock={this.props.foundStock}
          />
        }
      )
    } else if (this.props.choice === "Sportswear") {
      return sportsWearStocks.map(stock => {
        return <Stock
          name={stock.name}
          price={stock.price}
          id={stock.id} addToPortfolio={this.props.addToPortfolio}
          foundStock={this.props.foundStock}
          />
        }
      )
    } else if (this.props.alphabet) {
      return sortedStocksByName.map(stock => {
        return <Stock
          name={stock.name}
          price={stock.price}
          id={stock.id} addToPortfolio={this.props.addToPortfolio}
          foundStock={this.props.foundStock}
          />
        }
      )
    } else if (this.props.number) {
        return sortedStocksByPrice.map(stock => {
          return <Stock
            name={stock.name}
            price={stock.price}
            id={stock.id} addToPortfolio={this.props.addToPortfolio}
            foundStock={this.props.foundStock}
            />
          }
        )
    } else if (this.props.choice === "All"){
      return this.props.stocks.map(stock => {
        return <Stock
          name={stock.name}
          price={stock.price}
          id={stock.id} addToPortfolio={this.props.addToPortfolio}
          foundStock={this.props.foundStock}
          />
        }
      )
    }

  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderCards()}
      </div>
    );
  }

}

export default StockContainer;

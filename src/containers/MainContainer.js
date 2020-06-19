import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    alphabet: false,
    price: false,
    filter: 'All'
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({ stocks })
    })
  }

  buyStock = (stoock) => {
    let restOfStocks = this.state.stocks.filter(stock => stock !== stoock)

    this.setState((prevState) => ({
      portfolio: [...prevState.portfolio, stoock],
      stocks: restOfStocks
    }), () => console.log(this.state.stocks))
  }

  sellStock = (stoock) => {
    let restOfPortfolio = this.state.portfolio.filter(stock => stock !== stoock)

    this.setState((prevState) => ({
      stocks: [...prevState.stocks, stoock],
      portfolio: restOfPortfolio
    }))
  }

  alphabetize = () => {
    this.setState({
      alphabet: !this.state.alphabet
    })
  }

  priceSize = () => {
    this.setState({
      price: !this.state.price
    })
  }

  filterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { stocks, portfolio, alphabet, price, filter } = this.state

    return (
      <div>
        <SearchBar alphabetize={this.alphabetize} priceSize={this.priceSize} filterChange={this.filterChange} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} handlePurchase={this.buyStock} alphabet={alphabet} price={price} filter={filter} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} handlePurchase={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

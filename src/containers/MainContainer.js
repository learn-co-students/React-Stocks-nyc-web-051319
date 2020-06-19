import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filtered: false,
    nameChecked: false,
    priceChecked: false,
    type: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(stocks => {
      this.setState({
        stocks: stocks,
      })
    })
  }

  buyStock = (id) => {
    const foundStock = this.state.stocks.find(stock => stock.id === id)
    if (!this.state.portfolio.includes(foundStock)) {
      this.setState({
        portfolio: [...this.state.portfolio, foundStock]
      })
    }
  }

  sellStock = (id) => {
    const foundStock = this.state.stocks.find(stock => stock.id === id)

    const removeFromPortfolio = this.state.portfolio.filter(stock => {
      if (stock.id !== foundStock.id) {
        return stock
      }
    })

    this.setState({
      portfolio: removeFromPortfolio
    })
  }

  sortByName = () => {
    this.setState({
      nameChecked: !this.state.nameChecked
    })
  }

  sortByPrice = () => {
    this.setState({
      priceChecked: !this.state.priceChecked
    })
  }

  filterStocks = (event) => {
    this.setState({
      filtered: true,
      type: event.target.value
    })
  }

  render() {
    const renderStocks = () => {
      if (this.state.nameChecked) {
        let nameSorted = [...this.state.stocks].sort((a, b) => (a.name.localeCompare(b.name)))
        // or this:
        // ((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
        return <StockContainer stocks={nameSorted} buyStock={this.buyStock}/>
      } else if (this.state.priceChecked) {
        let priceSorted = [...this.state.stocks].sort((a, b) => a.price - b.price).reverse()
        return <StockContainer stocks={priceSorted} buyStock={this.buyStock}/>
      } else if (this.state.filtered) {
        let filtered = [...this.state.stocks].filter(stock => stock.type === this.state.type)
        return <StockContainer stocks={filtered} buyStock={this.buyStock}/>
      } else {
        return <StockContainer stocks={this.state.stocks} buyStock={this.buyStock}/>
      }
    }

    return (
      <div>
        <SearchBar sortByName={this.sortByName} sortByPrice={this.sortByPrice} filterStocks={this.filterStocks} nameChecked={this.state.nameChecked} priceChecked={this.state.priceChecked} />

          <div className="row">
            <div className="col-8">
              {renderStocks()}
            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

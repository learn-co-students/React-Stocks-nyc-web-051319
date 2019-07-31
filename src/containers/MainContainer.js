import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    myStocks: [],
    fStocks: []
  }

  componentDidMount() {
    this.fetchStocks()
  }

  fetchStocks = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        stocks: data,
        fStocks: data
      })
    })
  }

  buyStock = (boughtStock) => {
    if(!this.state.myStocks.includes(boughtStock)) {
      this.setState({
        myStocks: [...this.state.myStocks, boughtStock]
      })
    }
  }

  sellStock = (soldStock) => {
    const remainingStocks = this.state.myStocks.filter(stock => {
      return stock.id !== soldStock.id
    })
    this.setState({
      myStocks: remainingStocks
    }) 
  }

  filterStocks = (type) => {
    const filteredStocks = this.state.stocks.filter(stock => stock.type === type)
    this.setState({
      stocks: filteredStocks
    }, () => {
      this.state.stocks = this.state.fStocks
    })
  }

  sortStocks = (type) => {
    if(type === "Alphabetically") {
      const that = this
      // debugger
      this.setState({
        stocks: this.state.stocks.sort(function(a,b) {
          var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
            return -1
          if (nameA > nameB)
            return 1
          return 0 //default return value (no sorting)
        })
      })
    } else if(type === "Price"){
      this.setState({
        stocks: this.state.stocks.sort(function(a,b) {
          return a.price-b.price
        })
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock} />

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.myStocks} sellStock={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

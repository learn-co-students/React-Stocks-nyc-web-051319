import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    type: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(json => this.setState({stocks: json}))
  }

  addStock = (stock) => {
    if(!this.state.portfolio.includes(stock)) {
      this.setState(prevState => {
        return {
          portfolio: [...prevState.portfolio, stock]
        }
      })
    }
  }

  sellStock = (stock) => {
    const newArray = this.state.portfolio.filter(stockItem => {
      return stockItem.name !== stock.name
    })
    this.setState({
      portfolio: newArray
    })
  }

  handleSort = () => {
    const sortedStock = this.state.stocks.sort((a,b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()){
        return -1
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()){
        return 1
      }
      return 0
    })
    this.setState({
      stocks: sortedStock
    })
  }

  handlePriceSort = () => {
    const sortedStock = this.state.stocks.sort((a,b) => {
      return a.price - b.price
    })
    this.setState({
      stocks: sortedStock
    })
  }

  handleFilter = (event) => {
    this.setState({
      type: event.target.value
    })
  }

  render() {
    const filteredArray = this.state.stocks.filter(stock => stock.type.includes(this.state.type))
    return (
      <div>
        <SearchBar handleSort={this.handleSort} handlePriceSort={this.handlePriceSort} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer addStock={this.addStock} stocks={filteredArray}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sellStock={this.sellStock} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

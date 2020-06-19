import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  //STATE
  state = {
    stocks: [],
    portfolio: [],
    filteredStocks: []
  }

  //FETCH
  getStocks = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({
          stocks: stocks,
          filteredStocks: stocks
        })
      })
  }

  componentDidMount(){
    this.getStocks()
  }

  // HELPER FUNCTIONS
  buyStock =(stock)=>{
    const {portfolio} = this.state
    this.setState({
      portfolio: [...portfolio, stock]
    })
  }

  sellStock =(stock)=>{
    const { portfolio } = this.state
    const newPortfolio = [...portfolio]
    let index = newPortfolio.indexOf(stock)
    if (index !== -1) {
      newPortfolio.splice(index, 1);
      this.setState({ 
        portfolio: newPortfolio 
      });
    }
  }

  alphabetize = ()=>{
    const {stocks} = this.state
    const alphabetizedStocks = stocks.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    this.setState({
      stocks: alphabetizedStocks 
    })
  }

  sortPrice = ()=>{
    const {stocks} = this.state
    const sortedStocks = stocks.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
    this.setState({
      stocks: sortedStocks 
    })
  }

  filterStocks = (e)=>{
    const {stocks} = this.state
    const filteredStocks = stocks.filter(stock => stock.type === e.target.value)
    this.setState({
      filteredStocks: filteredStocks
    })
  }

  // RENDER
  render() {

    const { filteredStocks, portfolio} = this.state

    return (
      <div>
        <SearchBar alphabetize={this.alphabetize} sortPrice={this.sortPrice} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

            <StockContainer stocks={filteredStocks} handleClick={this.buyStock}/>

            </div>
            <div className="col-4">

            <PortfolioContainer portfolio={portfolio} handleClick={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

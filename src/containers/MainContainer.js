import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import LoadingPage from '../components/LoadingPage'
import LoadingPageForPortfolio from '../components/LoadingPageForPortfolio'

class MainContainer extends Component {

  state = {
    data: [],
    foundStock: [],
    alphabet: false,
    number: false,
    choice: "All"
  }

  addToPortfolio = (id) => {
    const foundIt = this.state.data.filter(stock => stock.id === id)
    let joined = this.state.foundStock.concat(foundIt)
    this.setState({
      foundStock: joined
    })
  }

  sell = (id) => {
    const foundItAgain = this.state.data.filter(stock => stock.id === id)
    let finalJoined = this.state.data.concat(foundItAgain)
    this.setState({
      data: finalJoined
    })
  }

  componentDidMount() {
    this.renderData()
  }

  renderData = () => {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocks => {
        let initialJoined = this.state.data.concat(stocks)
        this.setState({
          data: initialJoined
        })
      })
  }

  alphabetize = () => {
    this.setState({
      alphabet: !this.state.alphabet
    })
  }

  numerically = () => {
    this.setState({
      number: !this.state.number
    })
  }

  filterChoice = (event) => {
    this.setState({
      choice: event.target.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          alphabetize={this.alphabetize} numerically={this.numerically}
          filterChoice={this.filterChoice}
        />

          <div className="row">
            <div className="col-8">

              {
                this.state.data ?
                <StockContainer
                  stocks={this.state.data} addToPortfolio={this.addToPortfolio}
                  foundStock={this.state.foundStock}
                  alphabet={this.state.alphabet}
                  number={this.state.number}
                  choice={this.state.choice}
                />
                :
                <LoadingPage/>
              }

            </div>
            <div className="col-4">

              {
                this.state.foundStock ?
                <PortfolioContainer
                  stocks={this.state.data}
                  addToPortfolio={this.addToPortfolio} foundStock={this.state.foundStock}
                  sell={this.sell}
                />
                :
                <LoadingPageForPortfolio/>
              }

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

import React from 'react'

class Stock extends React.Component {

  state = {
    buyIt: false
  }

  buyIt = () => {
    this.setState({
      buyIt: !this.state.buyIt
    })
  }

  render() {
    return (
      <div>
        <div className="card" onClick={
          () => {this.props.addToPortfolio(this.props.id); this.buyIt()}
        }>
          {
            this.state.buyIt ?
            null
              :
            <div className="card-body">
              <h5 className="card-title">
                {this.props.name}
              </h5>
              <p className="card-text">
                {this.props.price}
              </p>
            </div>
          }
        </div>
      </div>
    )
  }
};

export default Stock

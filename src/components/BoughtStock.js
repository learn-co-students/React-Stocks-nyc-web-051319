import React from 'react'

class BoughtStock extends React.Component {

  state = {
    sold: false
  }

  sellIt = () => {
    this.setState({
      sold: !this.state.sold
    })
  }

  render() {
    return (
      <div>
      {
        this.state.sold ?
        null
          :
        <div className="card"
          onClick={
            () => {this.props.sell(this.props.id); this.sellIt()}
          }>
          <div className="card-body">
            <h5 className="card-title">
              {this.props.name}
            </h5>
            <p className="card-text">
              {this.props.price}
            </p>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default BoughtStock

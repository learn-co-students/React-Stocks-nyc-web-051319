import React from 'react'

// const {ticker, name, type, price} = props.stock

const Stock = (props) => (
  <div>

    <div className="card" onClick={() => props.handleClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">
        {props.stock.ticker}: ${props.stock.price}
        </p>
      </div>
    </div>


  </div>
);

export default Stock

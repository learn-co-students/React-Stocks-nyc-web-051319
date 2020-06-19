import React from 'react'

const Stock = (props) => (
    <div onClick={() => props.eventHandler(props.id)}>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              props.stock.name
            }</h5>
          <p className="card-text">{
              props.stock.ticker
            }</p>
        </div>
      </div>


    </div>
);

export default Stock

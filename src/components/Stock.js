import React from 'react'

const Stock = (props) => {

  const {stock, handleClick} = props

  return (
    <div>

      <div className="card" onClick={()=>handleClick(stock)}>
        <div className="card-body">
          <h5 className="card-title">{
              stock.name
            }</h5>
          <p className="card-text">{
              `${stock.ticker}: ${stock.price}`
            }</p>
        </div>
      </div>

    </div>
  )
}

export default Stock

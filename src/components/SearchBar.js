import React from 'react';

const SearchBar = (props) => {

  const { alphabetize, sortPrice, filterStocks } = props

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={alphabetize}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={sortPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterStocks}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

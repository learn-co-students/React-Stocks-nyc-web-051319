import React from 'react';

const SearchBar = (props) => {

  const handleChange = (event) => {
    if (event.target.value === 'Alphabetically') {
      props.sortByName()
    } else if (event.target.value === 'Price') {
      props.sortByPrice()
    }
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.nameChecked} onClick={(event) => handleChange(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.priceChecked} onClick={(event) => handleChange(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.filterStocks(event)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

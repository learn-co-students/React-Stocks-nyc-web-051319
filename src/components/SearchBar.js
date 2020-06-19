import React from 'react';

class SearchBar extends React.Component {

  render(){
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={this.props.handleSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={this.props.handlePriceSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={this.props.handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>

  )
  };
}


export default SearchBar;

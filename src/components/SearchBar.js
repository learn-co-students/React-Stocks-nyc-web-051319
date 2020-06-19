import React from 'react';


class SearchBar extends React.Component {

  state = {
    selectedOption: "Alphabetically"
  }


handleSelect = (e) => {
  this.props.filterStocks(e.target.value)
}

handleRadio = (e) => {
  this.setState({
    selectedOption: e.target.value
  }, () => {
    this.props.sortStocks(this.state.selectedOption)
  })
}

render () {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.state.selectedOption === 'Alphabetically'} onChange={this.handleRadio} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.state.selectedOption === 'Price'} onChange={this.handleRadio} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={this.handleSelect}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );

}
  
}


export default SearchBar;

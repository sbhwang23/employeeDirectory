import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault();
    let search = document.querySelector('.searchbar');
    this.props.searchHandler(search.value)
  }

  render() {
    return (
      <div>
        <input type='text' className='searchbar' placeholder='Search by first name'/>
        <button type='button' className='searchbtn' onClick={ this.handleClick }>Search</button>
      </div>
    );
  }
}

export default Search;

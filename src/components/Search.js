import React from 'react';

const Search = (props) => {

    return (
        <div>
          <form>
            <input
              placeholder="Search by name"
              name="search"
              type="text"
              className="form-control-lg search-font mx-auto"
              onChange={(event) => props.searchName(event)}
            />
          </form>
        </div>
      );
    
    }
    
    export default Search;

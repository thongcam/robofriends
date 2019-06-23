import React from 'react';


const SearchBox = ({searchChange}) => {
  return (
    <div className = 'pa2'>
      <input type='search' placeholder='Search for a robot...' className = "ph3 pv4 ba br2 b--washed-green w-40 bw1" onChange={searchChange}/>
    </div>
  );
}

export default SearchBox

import React from 'react'

const Searchbox=({searchfield,onSearch} )=>{
    return (
        <div className="pa2">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="searchboox"
            placeholder="Robo search"
            onChange={onSearch}
            />
        </div>
    )
}

export default Searchbox;
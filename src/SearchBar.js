import React, { useState } from 'react'

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const onInputChange = (evt) => {
        const newQuery = evt.target.value;
        setQuery(newQuery);
    }
    const onFormSubmit = (evt) => {
        evt.preventDefault();
        props.onQuerySubmit(query);
    }
    return (
        <div className="SearchBar" style={{margin: "1rem 1rem"}}>
            <div className="ui segment">
                <div className="ui form" onSubmit={onFormSubmit}>
                    <form>
                        <label>video search</label>
                        <input type="text" onChange={onInputChange} value={query} placeholder="search..."></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;


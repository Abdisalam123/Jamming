import { useCallback, useEffect, useState } from "react";
import './Searchbar.css';

const SearchBar = (props) => {

    /*This component handles the search through a async fetch request*/

    const [term, setTerm] = useState("");

    //This hook changes and stores the search term in the state.
    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    //This hook is used as a callback to the async fetch request.
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props, term]);
    
    return (
        <div className="SearchBar">
            <input  className="this" placeholder="Search" onChange={handleTermChange} />
            <button className="SearchButton" onClick={search}>
                Search
            </button>
        </div>
    );
};

export default SearchBar; 

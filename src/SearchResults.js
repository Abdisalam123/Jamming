import TrackList from './TrackList.js';
import './SearchResults.css';

const SearchResults = (props) => {

    /*This component simply displays the search results*/

    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList 
            tracks={props.searchResults} 
            onAdd={props.onAdd} 
            isRemoval={false}
            />
        </div>
    );
};

export default SearchResults;
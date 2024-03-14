import { useCallback } from "react";
import TrackList from './TrackList';
import './Playlist.css';

const Playlist = (props) => {

    /*This component handles only the Playlist name change*/

    //Event handler for the playlist name change.
    const handleNameChange = useCallback( (event) => {

        props.onNameChange(event.target.value);

    }, [props]);

    return (
        <div className="Playlist">
            <input onNameChange={handleNameChange} defaultValue={"New Playlst"} />
            <TrackList
            tracks={props.playlistTracks}
            isRemoval={true}
            onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                SAVE
            </button>
        </div>
    );
};

export default Playlist;
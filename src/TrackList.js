import Track from "./Track.js";
import './TrackList.css';

const TrackList = (props) => {
    
    /*This component is used to display the tracks added to the playlist.*/
    
    return (
        <div className="TrackList">
            {props.tracks.map( (track) => {
                return (
                    <Track
                    track={track}
                    key={track.id}
                    onAdd={props.onAdd}
                    isRemoval={props.isRemoval}
                    onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};

export default TrackList;
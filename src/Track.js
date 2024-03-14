import { useCallback } from "react";
import './Track.css';


const Track = (props) => {

    /*This component is used to add and remove tracks to the playlist.*/

    //Simple callback function that adds the track to the playlist.
    const addTrack = useCallback( (event) => {
        props.onAdd(props.track);
    }, [props.onAdd, props.track]);

    //Simple callback function that removes the track from the playlist.
    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        }, [props.onRemove, props.track]
    );
    
    //This function is a conditional used determine which button to show.
    const renderAction = () => {

        if(props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            )
        } else {
            return (
                <button className="Track-action" onClick={addTrack}>
                    +
                </button>
            )
        }
    };

    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                    {props.track.artist} | {props.track.album}
                </p>
            </div>
            {renderAction()}
        </div>
    );
};

export default Track;
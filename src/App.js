import './App.css';
import Login from './Login';
import SearchBar from './Searchbar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import UserInfo from './UserInfo';
import Logic from './Logic';
import Logout from './Logout';
import { useCallback, useState } from 'react';

function App() {

  /*Top level component holds three different states.
    -Search results.
    -Playlist name
    -The tracks to be added to the playlist.*/ 

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlayListTracks] = useState([]);

  //Callback hook that is an async fetch call.
  const search = useCallback((term) => {
    Logic.search(term).then(setSearchResults);
  }, []);

  //Callback hook that adds the tracks to the playlist using a some function and spread syntax.
  const addTrack = useCallback(
    (track) => {

      if(playlistTracks.some( (savedTrack) => savedTrack.id === track.id))
      return;

      setPlayListTracks( (prevTracks) => [...prevTracks, track]);
    }, [playlistTracks]
  );

  //Callback hook that removes the track from the playlist, done using a filter function.
  const removeTrack = useCallback(
    (track) => {
      setPlayListTracks( (prevTracks) => prevTracks.filter( (currentTrack) => currentTrack.id !== track.id));
    }, []
  );

  //Callback hook that lets the user name their playlist.
  const updatePlaylistName = useCallback(
    (name) => {
      setPlayListTracks(name);
    }, []
  );

  //Callback hook that saves the playlist using an async POST fetch call.
  const savePlaylist = useCallback( () => {

    const trackUris = playlistTracks.map( (track) => track.uri);

    Logic.savePlayList(playlistName, trackUris).then( () => {
      setPlaylistName("New Playlist");
      setPlayListTracks([]);
    });
  }, [playlistName, playlistTracks]);

  Logic.saveTracks();

  return (
    <div>
      <header id='App-header'>
        <UserInfo />
        <Login />
        <Logout />
      </header>
      <div id='main'>
        <SearchBar onSearch={search} />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            />
        </div>
      </div>
    </div>
  );
};

export default App;
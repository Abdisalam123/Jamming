let access_token = window.sessionStorage.getItem("token");
let userId = window.sessionStorage.getItem("id");

const Logic = {

    //Method to request search terms from Spotify api.
    search(term) {

        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    //Method to save the playlist via a POST request to Spotify api.
    async savePlayList(playlistName, trackUris) {

        const params = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            body: JSON.stringify({ name: playlistName })
        };

        return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, params)
            .then(response => response.json())
            .then(jsonResponse => {

                const playlistID = jsonResponse.id;

                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
                    headers: { Authorization: `Bearer ${access_token}` },
                    method: 'POST',
                    body: JSON.stringify({ uris: trackUris })
                })
            });
    },

    //Add tracks to the current playlist.
    async saveTracks(trackUris) {

        let initial = 0;
        window.sessionStorage.setItem("playlistPos", initial);
    }
};


export default Logic;
import './Logout.css';

function Logout() {

    /*This will hold the logic for the login button*/

    //Redirect URL, this is by default set to local host on port 3000. Please change according.
    const redirectURI = `http://localhost:3000`;

    //Function to clear local client and session client storage. It will then redirect user to login page.
    const handleClick = () => {

        window.localStorage.clear();
        window.sessionStorage.clear();
        return window.location.assign(redirectURI);
    }

    return (
        <div className="Logout">
            <button
            type="button"
            id="logout-btn"
            onClick={handleClick}
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
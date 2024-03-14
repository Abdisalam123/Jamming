import { useState, useEffect } from "react";
import './UserInfo.css';

function UserInfo() {

    //Store the access token.
    const token = window.sessionStorage.getItem("token");

    //Set initial state as a falsy value.
    let [name, setName] = useState("");

    useEffect( () => {
        
        //Async GET request to get the user's name.
        const getUserName = async () => {

            const params = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`
                }
            }
        
            return await fetch(`https://api.spotify.com/v1/me`, params).then( response => response.json()).then( (response) => {

                const {display_name, id} = response;

                //Set the name to the current user.
                setName( (name) => {
                
                    window.sessionStorage.setItem("display_name", display_name);
                    window.sessionStorage.setItem("id", id);
                    document.getElementById("username").style.display = "block";
                    
                    return name = display_name;
    
                });

            }); 
        }

            //Check if token is still valid and then hide elements accordingly.
            if(token) {

            getUserName();

            document.getElementById("login").style.display = "none";
            document.getElementById("logout-btn").style.display = "block";
            document.getElementById('main').style.display = "block"; 
    
            }


    }, [token]);


    return (
        <div>
            <h2 id="username">
                {name}
            </h2>
        </div>
    );
};

export default UserInfo;
# Project Title

Title: Jamming.

# Project Description

This project is aimed at showcasing the ease of using React to create a simple app. It uses the Spotify WebAPI [https://developer.spotify.com/documentation/web-api] to fetch tracks and save playlists.

	The applications allows the user to login using implicit grant and then stores the access token and user credentials in the browser’s session storage. Once these have been received and stored, the user is able to then search Spotify’s catalogue of tracks to save to their custom playlist. 

	The project uses React JS to accomplish this and is a fine example of the use of fetch, async functions and API calls. It also showcases how react is perfect for Single Page Applications (SPAs).

# How to Run

This application is run via React and Node.js. In order to run the application on your client, 	firstly ensure you have Node installed, if you do not you can download it free via [this link](https://nodejs.org/en).

Once installed you can check by running node -v npm -v.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# How to Use

Note: This application uses implicit grant and stores the access code on the user’s client. In 	order for the application to work please log into Spotify on your browser first.

1. Open the folder in vscode and from the terminal run npm start. This will launch the 	application on your default browser.
	
2. Click the login button. This will take you to the Spotify implicit grant flow window. 	Agree and if the request is successful, it will return you to the application.

3. You then rename the playlist from ‘New Playlist’.

4. Use the search bar to search the Spotify track list catalogue.

5. Use the + and - to add and remove tracks.

6. Use the save button to save the playlist for later use on the Spotify app.  

![Screebshot of the Jamming application](https://github.com/Abdisalam123/Jamming/assets/9461208/66437f9e-45eb-4bc6-9fb1-8dda4343c552)


# Credits

Code: Abdisalam Sheek

WebAPI: Spotify

Dependencies: 

- "@testing-library/jest-dom": "^5.17.0",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4"

# Licence

MIT License

Copyright (c) [2024] [Abdisalam Sheek]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Badges

![Static Badge](https://img.shields.io/badge/React.js-Node.js-green)
![Static Badge](https://img.shields.io/badge/CSS-blue)

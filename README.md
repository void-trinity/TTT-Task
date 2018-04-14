# Link to front end:

A working model can be found here: <a href="https://tttfrontend.herokuapp.com/"> TTT-Task </a>

# Note

As the app is hosted on heroku free tier, it might take some seconds to fetch the data from node server

# About The Project

This project was made as the part of the Terribly Tiny Tales task to be submitted for applying to internship. This is the repo for the frontend. Backend repo can be found here: <a href="https://github.com/void-trinity/TTT-Backend">Backend</a>

# Technologies Used

<ul>
    <li> React JS (Front End)
    <li><a href="materializecss.com"> Materialize CSS </a>
    <li> Node JS (Express JS Backend)
    <li> Axios for HTTP requests
    <li> Body-Parser for parsing json body in backend
    <li> Heroku for hosting both the backend server and frontend
</ul>

# Working

<ol>
    <li> First the React App is rendered in the front end. The state of the current app is set as following:
        {
            loaded: false, // Tells whether the data is received from the backend
            loading: false, // Tells about the fetching state. When True, loader is shown on screen
            data: [], // Used to store wordlist array received from backend
            n: 0, // The value to be sent to backend for number of words to be returned
            success: false, // In sync with the success token returned in json by backend. Used to render error 
        }
    <li> The app waits for the button to be clicked and sends the number entered in the text box to the backend in the form of JSON.
    <li> The Express server receives the json and then fetches the text file hosted at TTT server
    <li> The text file is parsed and an array containing only valid words(numerical and special symbols excluded) is generated
    <li> Using this array, another array of objects is generated each having two keys: word and its frequency with their respective values
    <li> This array of objects is sorted by their frequency of each object
    <li> Now the length of new array is compared with the query n received as the input
    <li> If n is more than the length, a return object is created with success key as false
    <li> If not, then the server processes the array of objects and creates a return object with success key as true and a data key with value as array of n most frequently occurring objects from the server.
    <li> This return object is returned to the front end
    <li> If success is false, an error message is displayed in the react app, else a table with the generated data is displayed.
</ol>

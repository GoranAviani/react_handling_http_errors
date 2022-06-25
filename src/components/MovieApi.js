import axios from "axios";
import processedResult from './ProcessMovieApi'

const movieAPI = async () => {
    const result = await axios({
        method: "get",
        url: 'https://swapi.dev/api/films/'
    }).catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);

    });
    console.log(result)
    const c = processedResult(result)
    console.log(c)
    return c
}

export default movieAPI;
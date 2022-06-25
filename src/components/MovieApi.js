import axios from "axios";
import processedResult from './ProcessMovieApiResult'

const movieAPI = async (url, setError) => {
    const result = await axios({
        method: "get",
        url: url
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);


            setError({
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            })
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

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
    return processedResult(result)
}

export default movieAPI;
import axios from "axios";

const movieAPI = async () => {
    const processedResult = ({result}) => {
    console.log("process")
    console.log(result)
    const a = result.result.results.map(
        (row) => {
            return {
                id: row.episode_id,
                title: row.title,
                releaseDate: row.release_date,
                openingText: row.opening_crawl,
            }
        }
    )
    return a
}



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
   return processedResult(result)
}

export default movieAPI;
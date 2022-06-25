import axios from "axios";


export const movieAPI = async () => {
    const result = await axios({
        method: "get",
        url: 'https://swapi.dev/api/films/'
    })

    const processedResult = result.data.results.map(
        (row) => {
            return {
                id: row.episode_id,
                title: row.title,
                releaseDate: row.release_date,
                openingText: row.opening_crawl,
            }
        }
    )
    return processedResult
}

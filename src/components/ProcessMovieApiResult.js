const processedResult = (result) => {
    console.log("process")
    console.log(result)
    const a = result.result.data.results.map(
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

export default processedResult;
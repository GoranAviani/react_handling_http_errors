const processedResult = (result) => {
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
    console.log(a)
}

export default processedResult;
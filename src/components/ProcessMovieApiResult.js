const processedResult = (result) => {
    return result.data.results.map(
        (row) => {
            return {
                id: row.episode_id,
                title: row.title,
                releaseDate: row.release_date,
                openingText: row.opening_crawl,
            }
        }
    )
}

export default processedResult;
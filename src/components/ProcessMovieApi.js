const processedResult = async ({result}) => {
    console.log(result)
    const a = await result.result.data.results.map(
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

export default processedResult()
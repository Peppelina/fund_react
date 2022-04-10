export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let resultArray =[]
    for (let i = 1; i <= totalPages; i++) {
        resultArray.push(i)
    }
    return resultArray
}
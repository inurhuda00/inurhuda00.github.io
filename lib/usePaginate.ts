import { useState } from 'react'

function usePagination(data: Array<{}>, itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1)

    const maxPage = Math.ceil(data.length / itemsPerPage)

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(0, end)
    }

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    }

    return { next, currentData, currentPage, maxPage }
}

export default usePagination

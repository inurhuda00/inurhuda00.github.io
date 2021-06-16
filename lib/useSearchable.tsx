import { useMemo } from 'react'

export const useSearchable = (
    data: Array<{ [key: string]: any }>,
    searchText: string,
    callback: any
) => {
    return useMemo(() => {
        const regex = new RegExp(searchText, 'i')
        return data.filter((item: any) =>
            callback(item).some((sp: any) => regex.test(sp))
        )
    }, [data, searchText, callback])
}

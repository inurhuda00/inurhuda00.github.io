import { createContext, useState, useContext } from 'react'

export const searchContext = createContext({} as any)

export const SearchProvider: React.FunctionComponent = ({ children }) => {
    const [search, setSearch] = useState('')

    return (
        <searchContext.Provider value={{ search, setSearch }}>
            {children}
        </searchContext.Provider>
    )
}

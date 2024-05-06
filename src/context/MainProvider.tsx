'use client'
 
import { createContext, type Dispatch, type SetStateAction, useState } from 'react'

export interface currentPageState {
    pageState: number,
    setPageState: Dispatch<SetStateAction<number>>
}

export const MainContext = createContext<currentPageState | null>(null)
 
export default function MainProvider({ children }: { children: React.ReactNode }) {    
    const [pageState, setPageState] = useState<number>(0);

    return <MainContext.Provider value={{ pageState, setPageState }}>{children}</MainContext.Provider>
}
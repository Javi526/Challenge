import { createContext, useCallback, useEffect, useReducer } from "react";
import { initialState, reducer } from "@/reducer";
import { FETCH_DATA_ARTICLE_SUCCESS } from "@/constants/reducer";

type Props = {
    status: number,
    data: any,
    children: any
}

interface AppContextInterface {
    state: any;
    dispatch: any;
}

export const Context = createContext<AppContextInterface | null>(null);

export const HookContext = ({ status, data, children } : Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const UseFetchReducer = useCallback(() => {
        if (status === 200) {
            dispatch({ type: FETCH_DATA_ARTICLE_SUCCESS, payload: data })
        }
    }, [data])

    useEffect(() => {
        UseFetchReducer();
    }, [UseFetchReducer])

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
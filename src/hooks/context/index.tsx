import { createContext, ReactNode, useCallback, useEffect, useReducer } from "react";
import { initialState, reducer } from "@/reducer";
import { FETCH_DATA_ARTICLE_ERROR, FETCH_DATA_ARTICLE_SUCCESS } from "@/constants/reducer";
import { Article_Interface } from "@/interface/common/article";

type Props = {
    status: number,
    data: Article_Interface[],
    children: ReactNode
};

export const Context = createContext<any>(null);

export const HookContext = ({ status, data, children } : Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const UseFetchReducer = useCallback(() => {
        if (status === 200) {
            dispatch({ type: FETCH_DATA_ARTICLE_SUCCESS, payload: data })
        } else { dispatch({ type: FETCH_DATA_ARTICLE_ERROR, payload: "not found" }) }
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
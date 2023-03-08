import { FETCH_DATA_ARTICLE_ERROR, FETCH_DATA_ARTICLE_INIT, FETCH_DATA_ARTICLE_SUCCESS } from "@/constants/reducer";
import { Article_Interface } from "@/interface/common/article";

type Props_Article = {
    loading: boolean,
    error: string,
    posts: Article_Interface[],
}

export const initialState: Props_Article = {
    loading: true,
    error: "",
    posts: [],
};

export const reducer = (state: Props_Article, action: { type: string; payload: any }): Props_Article => {
    switch (action.type) {
        case FETCH_DATA_ARTICLE_INIT:
            return initialState;
        case FETCH_DATA_ARTICLE_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
                error: ""
            };
        case FETCH_DATA_ARTICLE_ERROR:
            return {
                loading: false,
                posts: [],
                error: action.payload
            }
        default:
            return state;
    }
};

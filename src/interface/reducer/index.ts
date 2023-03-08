import {Article_Interface} from "@/interface/common/article";

export interface Dispatch_interface {
    type: string,
    payload: Article_Interface[]
}

export interface AppContextInterface {
    state: Article_Interface[];
    dispatch: () => void;
}

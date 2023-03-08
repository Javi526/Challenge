import { ReactElement } from "react";

type Props = {
    text: string
};

export default function Icon({ text } : Props): ReactElement {
     return <i className={text}></i>
};
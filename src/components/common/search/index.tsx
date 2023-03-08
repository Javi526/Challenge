import Icon from "@/components/common/icon";
import { Dispatch, SetStateAction } from "react";

type Props = {
   value: boolean,
   action: Dispatch<SetStateAction<boolean>>;
};

export default function Search({ action, value } : Props) {
    return (
        <form className={"com-search"}>
          <input
              type={"text"}
              className={"com-search__input"}
              placeholder={"Buscar"}
              onClick={() => { if (!value) action(!value); }}
              onBlur={() => action(false)}/>
             <Icon text={"icon-search"} />
          <input type={"submit"} value={"Buscar"} className={"--btn --primary com-search__submit"} />
        </form>
    )
};
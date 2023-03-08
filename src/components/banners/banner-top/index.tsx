import { ReactElement } from "react";

export default function BannerTop() : ReactElement {
    return (
        <div className={"banner w-100 --bg-banner"}>
          <div className={"banner --top --desktop"}></div>
          <div className={"banner --top --tablet"}></div>
          <div className={"banner --top --mobile"}></div>
        </div>
    )
}
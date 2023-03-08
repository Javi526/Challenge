import { ReactElement } from "react";

export default function BannerSticky() : ReactElement {
    return (
        <div className={"banner w-100 --bg-banner"}>
          <div className={"banner --sticky --mobile"}></div>
        </div>
    )
}
import { Fragment, ReactElement } from "react";

export default function BannerAside() : ReactElement {
    return (
      <Fragment>
          <div className={"banner --desktop --large"}></div>
          <div className={"com-ranking hlp-none hlp-tablet-none"}></div>
          <div className={"banner --desktop --large"}></div>
      </Fragment>
    )
}
import BannerTop from "@/components/banners/banner-top";
import BannerSticky from "@/components/banners/banner-sticky";
import Article from "@/components/content/article";
import ArticleButton from "@/components/content/article-button";
import { Fragment, useContext } from "react";
import { Context } from "@/hooks/context";
import { GetTags } from "@/utils";
import {Tag_Interface} from "@/interface/common/article";
import BannerAside from "@/components/banners/banner-aside";

export default function Content() {
    const { state } = useContext(Context);

    return (
        <main>
          <BannerTop />
          <BannerSticky />
          <div className={"lay-sidebar"}>
            <div className={"sidebar__main"}>
              <div className={"row"}>
                <div className={"com-titleWithfollow hlp-marginBottom-15"}>
                  <h1 className={"com-title-section-xl hlp-marginBottom-40"}>Acumulado Grilla</h1>
                </div>
              </div>
              <div className={"row"}>
                <div className={"cont_tags com-secondary-tag hlp-marginBottom-20"}>
                  {GetTags({ articles: state.posts.articles })?.map((data: Tag_Interface) => (
                     <Fragment key={data.slug}>
                         <a href={""}>{data.text}</a>
                     </Fragment>
                  ))}
              </div>
              </div>
               <Article data={state.posts.articles} />
               <ArticleButton />
            </div>
            <div className={"sidebar__aside"}>
              <BannerAside />
            </div>
          </div>
        </main>
    )
}
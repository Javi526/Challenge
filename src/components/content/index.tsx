import BannerTop from "@/components/banners/banner-top";
import BannerSticky from "@/components/banners/banner-sticky";
import Article from "@/components/content/article";
import ArticleButton from "@/components/content/article-button";

export default function Content() {

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
                  <a href={""}>Plato Principales</a>
                    <a href={""}>Plato Principales</a>
                    <a href={""}>Plato Principales</a>
                </div>
              </div>
              <Article />
              <ArticleButton />
            </div>
            <div className={"sidebar__aside"}></div>
          </div>
        </main>
    )
}
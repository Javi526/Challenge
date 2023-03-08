import { Article_Interface, Grid_Interface, Tag_Interface } from "@/interface/common/article";

type Props = {
    articles: Article_Interface[]
};

const FormatDate = (value: string): string => {
    const date = new Date(value);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("es-ES", { month: "long" }).format(date);
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
}

export const GetGrid = ({ articles } : Props) => {
    const tags : any = articles?.filter((data : Article_Interface) => data.subtype === "7")
        .map((p : Article_Interface) : Grid_Interface => {
            return {
                title: p.headlines.basic,
                subtitle: p.promo_items.basic.subtitle ,
                img: p.promo_items.basic.url,
                date: FormatDate(p.display_date),
                _id: p._id
            }
        });
    return tags;
}

export const GetTags = ({ articles } : Props) => {
    const AllTags : Record<string, Tag_Interface> = articles?.reduce((count: Record<string, Tag_Interface>, article: Article_Interface) => {
        const init : number = 0
        for (let tag of article.taxonomy.tags){
            if (!count[tag.text]) {
                count[tag.text] = { ...tag, count: init  }
            }
              // @ts-ignore
            count[tag.text].count++
        }
        return count
    },{})

    const Order = (value: Record<string, Tag_Interface>) => {
        if (value) {
            return Object?.values(AllTags)
                .sort((a: Tag_Interface, b: Tag_Interface) => a.count - b.count)
                .slice(0, 10)
        }
        return [];
    }

    return Order(AllTags);
}
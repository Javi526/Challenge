import Card from "@/components/common/card";
import { Article_Interface, Grid_Interface } from "@/interface/common/article";
import { GetGrid } from "@/utils";
import { Fragment } from "react";

type Props = {
    data: Article_Interface[]
};

export default function Article({ data } : Props) {

    const handleChangeTransparent = () => {
        if (typeof window === "object") {
            const element : HTMLElement | null = window.document.getElementById("card-id");
            if (element !== null) return { height: element.clientHeight };
            return {}
        }
    };

    return (
        <section className={"row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade"}>
            {GetGrid({articles: data})?.map((data: Grid_Interface) => (
                <Fragment key={data._id}>
                    <Card
                        title={data.title}
                        subtitle={data.subtitle}
                        date={data.date}
                        img={data.img}
                        _id={data._id}
                    />
                </Fragment>
            ))}
            <div className={"transparency"} style={handleChangeTransparent()}></div>
        </section>
    )
}
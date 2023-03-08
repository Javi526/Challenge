import Image from "next/image";
import { Grid_Interface } from "@/interface/common/article";

export default function Card({ title, subtitle, img, date, _id }: Grid_Interface) {
    return (
        <article className={"mod-caja-nota w-100-mobile"} id={"card-id"}>
            <section className={"cont-figure"}>
                <a className={"figure"}>
                    <picture className={"content.pic picture"}>
                        <Image fill={true}  src={img} alt={`img-${_id}`} className={"content-img"} />
                    </picture>
                </a>
            </section>
            <div className={"mod-caja-nota__descrip"}>
                <h2 className={"com-title-acu"}>
                    <a href={""}>
                        <b>{title}</b>
                        {subtitle}
                    </a>
                </h2>
                <h4 className={"com-date"}>{date}</h4>
            </div>
        </article>
    )
}
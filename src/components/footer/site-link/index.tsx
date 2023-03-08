import { FooterItem } from "@/constants/footer";
import { FooterItem_Interface } from "@/interface/footer";

export default function SiteLink() {
    return (
        <section className={"col-desksm-9 col-deskxl-8 footer-sitio__links"}>
            {FooterItem.map((data: FooterItem_Interface) => (
                <a href={data.url} className={data.className} key={data.id}>{data.text}</a>
            ))}
        </section>
    )
}
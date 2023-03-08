import { SocialMediaLogos_Item } from "@/constants/footer";
import { Logos_Interface } from "@/interface/footer";
import Icon from "@/components/common/icon";

export default function SocialMediaLogos() {
    return (
        <section className={"col-12 col-desksm-4 col-desk-3 footer-header__redes"}>
            {SocialMediaLogos_Item.map((data: Logos_Interface) => (
                <a href={data.url}  key={data.id}>
                    <Icon text={data.icon} />
                </a>
            ))}
        </section>
    )
}
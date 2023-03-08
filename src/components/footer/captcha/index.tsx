import { ConditionsAndPrivacy } from "@/constants/footer";
import { ConditionsAndPrivacy_Interface } from "@/interface/footer";

export default function Captcha() {
    return (
        <section className={"col-desksm-3 col-deskxl-4 footer-sitio__captcha"}>
         <p>
           Protegido por re CAPTCHA:
           {ConditionsAndPrivacy.map((data: ConditionsAndPrivacy_Interface) => (
             <a href={data.url} target={"_blank"} className={data.className} key={data.id}>{data.title}</a>
           ))}
         </p>
        </section>
    )
}
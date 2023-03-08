import { FooterAppStore } from "@/constants/footer";
import { App_Store_Interface } from "@/interface/footer";
import Image from "next/image";

export default function AppStore() {
    return (
        <section className={"col-12 col-desksm-4 col-desk-3 footer-header__app"}>
            {FooterAppStore.map((data: App_Store_Interface) => (
               <a href={data.url} className={data.className} key={data.id}>
                  <Image src={data.img} alt={data.alt} />
               </a>
            ))}
        </section>
    )
}
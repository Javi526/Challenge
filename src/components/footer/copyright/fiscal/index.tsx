import Image from "next/image";
import { DataFiscal, GdaMember } from "@/constants/footer";

export default function CopyrightFiscal() {
    return (
        <section className={"col-desksm-6 col-desk-6 footer-copyright__fiscal"}>
            <p>
              <Image src={GdaMember.img} width={38} height={21} className={GdaMember.className} alt={GdaMember.alt} />
                {GdaMember.name}
              <a href={DataFiscal.url} target={"_blank"}>
                <Image src={DataFiscal.img} width={33} height={45} className={DataFiscal.className} alt={DataFiscal.alt} />
              </a>
            </p>
        </section>
    )
}
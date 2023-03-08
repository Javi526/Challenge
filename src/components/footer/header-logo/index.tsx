import Logo from "@/components/common/logo";
import { ROUTER } from "@/constants/router";

export default function HeaderLogo() {
    return (
        <section className={"col-desksm-4 col-desk-6 footer-header__logo"}>
            <Logo url={ROUTER.landingNacion} className={""} />
        </section>
    )
}
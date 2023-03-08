import { ClassNameLogoMobile } from "@/constants/header";
import Logo from "@/components/common/logo";
import { ROUTER } from "@/constants/router";

export default function HeaderMobile() {
    return (
        <header className={`header-mobile`}>
            <div className={"lay"}>
                <div className={"row"}>
                  <div className={"col-6"}>
                    <Logo url={ROUTER.landing} className={ClassNameLogoMobile} />
                  </div>
                  <div className={"col-6 hlp-text-right"}>
                    <a>Suscribite</a>
                  </div>
                </div>
            </div>
        </header>
    )
};
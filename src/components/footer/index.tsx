import HeaderLogo from "@/components/footer/header-logo";
import SocialMediaLogos from "@/components/footer/social-media-logos";
import AppStore from "@/components/footer/app-store";
import SiteLink from "@/components/footer/site-link";
import Captcha from "@/components/footer/captcha";
import CopyrightFiscal from "@/components/footer/copyright/fiscal";
import CopyrightReserved from "@/components/footer/copyright/reserved";

export default function Footer() {
    return (
        <footer>
          <div className={"lay"}>
             <section className={"row footer-header"}>
                <HeaderLogo />
                <SocialMediaLogos />
                <AppStore />
             </section>
             <section className={"row footer-sitio"}>
                <SiteLink />
                <Captcha />
             </section>
             <section className={"row footer-copyright"}>
                <CopyrightFiscal />
                <CopyrightReserved />
             </section>
          </div>
        </footer>
    )
};
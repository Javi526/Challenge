import { LoginButton, SubscribeButton, MenuStatus, ClassNameLogo, ActiveSearch } from "@/constants/header";
import ButtonSubscribe from "@/components/common/button/subscribe";
import SecondaryButton from "@/components/common/button/secondary";
import { useState } from "react";
import Logo from "@/components/common/logo";
import { ROUTER } from "@/constants/router";
import Search from "@/components/common/search";

export default function Header() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const activeMenu : string = showMenu ? MenuStatus.active : MenuStatus.inactive;

    return (
        <header className={`header ${activeMenu} ${showSearch && ActiveSearch}`}>
           <div className={"lay"}>
             <div className={"row"}>
               <div className={"col-4 header__left"}>
                 <div className={"com-hamburger"} onClick={() => setShowMenu(!showMenu)}>
                    <span className={"com-hamburger__bar"}></span>
                    <span className={"com-hamburger__bar"}></span>
                    <span className={"com-hamburger__bar"}></span>
                 </div>
                 <Search value={showSearch} action={setShowSearch} />
               </div>
               <div className={"col-4 header__middle"}>
                  <Logo url={ROUTER.landing} className={ClassNameLogo} />
               </div>
               <div className={"col-4 header__right"}>
                 <div className={"com-usuario"}>
                     <ButtonSubscribe name={SubscribeButton.name} />
                     <SecondaryButton name={LoginButton.name} />
                 </div>
               </div>
             </div>
           </div>
        </header>
    )
}
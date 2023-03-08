import { ROUTER } from "@/constants/router";
import {Button_Interface, Menu_Status_Interface} from "@/interface/header";

// Desktop

export const SubscribeButton: Button_Interface = {
    name: "SUSCRIBITE",
    link: ROUTER.subscribe
};

export const LoginButton: Button_Interface = {
    name: "INGRESAR",
    link: ROUTER.login
};

export const MenuStatus: Menu_Status_Interface = {
    active: "--active-menu --scrollUp",
    inactive: "--scrollUp"
};

export const ActiveSearch : string = "--active-search";

export const ClassNameLogo: string = "header__middle__logo";


// Mobile

export const ClassNameLogoMobile: string = "header-mobile__logo";
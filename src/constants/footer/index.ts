import LogoAndroid from "@/assets/common/logo/logo-android.svg";
import LogoIos from "@/assets/common/logo/logo-ios.svg";

import {
    App_Store_Interface,
    ConditionsAndPrivacy_Interface,
    FooterItem_Interface,
    Logos_Interface,
    GdaMember_Interface,
    DataFiscal_Interface
} from "@/interface/footer";

export const SocialMediaLogos_Item: Logos_Interface[] = [
    { id: 1, icon: "icon-facebook", url: "https://www.facebook.com/lanacion" },
    { id: 2, icon: "icon-twitter", url: "https://twitter.com/LANACION" },
    { id: 3, icon: "icon-instagram", url: "https://www.instagram.com/lanacioncom/" },
    { id: 4, icon: "icon-rss", url: "https://servicios.lanacion.com.ar/herramientas/rss/ayuda" },
];

export const FooterItem: FooterItem_Interface[] = [
    { id: 1, text: "Mapa del sitio", url: "https://www.lanacion.com.ar/mapa-del-sitio/", className: "item_link" },
    { id: 2, text: "Ayuda", url: "https://www.contacto.lanacion.com.ar/ayuda", className: "item_link" },
    { id: 3, text: "Términos y condiciones", url: "https://www.contacto.lanacion.com.ar/tyc", className: "item_link" },
    { id: 4, text: "¿Cómo anunciar?", url: "https://www.lanacion.in/#/", className: "item_link" },
    { id: 5, text: "Suscribirse al diario impreso", url: "https://suscripciones.lanacion.com.ar/suscribirme", className: "item_link" }
];

export const FooterAppStore: App_Store_Interface[] = [
    { id: 1, img: LogoAndroid, url: "https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419", alt: "/img-android", className: "app_play" },
    { id: 2, img: LogoIos, url: "https://apps.apple.com/ar/app/la-nacion/id410689702", alt: "/img-ios", className: "app_ios" }
];

export const ConditionsAndPrivacy: ConditionsAndPrivacy_Interface[] = [
    { id: 1, title: "Condiciones", url: "https://policies.google.com/terms?hl=es-419", className: "condition" },
    { id: 2, title: "Privacidad", url: "https://policies.google.com/privacy?hl=es-419", className: "private" }
];

export const Copyright: string = "Copyright 2019 SA LA NACION | Todos los derechos reservados";

export const GdaMember: GdaMember_Interface = {
    name: "Miembro de GDA. Grupo de Diarios América",
    img: "https://static.glanacion.com/v2/ln/img/gda.jpg",
    className: "img_gda",
    alt: "gda"
};

export const DataFiscal: DataFiscal_Interface = {
    name: "Miembro de GDA. Grupo de Diarios América",
    url: "https://serviciosweb.afip.gob.ar/clavefiscal/qr/GenericError.htm?aspxerrorpath=/clavefiscal/qr/publicInfoD.aspx",
    img: "https://static.glanacion.com/v2/ln/img/data.jpg",
    className: "img_data-fiscal",
    alt: "Data fiscal"
};

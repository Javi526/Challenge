export interface Article_Mosk_Interface {
    display_date: string,
    headlines: Headline_Interface,
    promo_items: PromoItem_Interface,
    subtype: string,
    taxonomy: Tags_Mosk_Interface,
    website_url: string,
    _id: string
}

export interface Article_Interface {
    display_date: string,
    headlines: Headline_Interface,
    promo_items: PromoItem_Interface,
    subtype: string,
    taxonomy: Tags_Interface,
    website_url: string,
    _id: string
}

export interface Headline_Interface {
    basic: string
}

export interface PromoItem_Interface {
    basic: PromoItemBasic_Interface
}

export interface Tags_Interface {
    tags: Tag_Interface[]
}
export interface Tags_Mosk_Interface {
    tags: Tag_Mosk_Interface[]
}
export interface Tag_Mosk_Interface {
    slug: string,
    text: string,
    count?: number
}

export interface Tag_Interface {
    slug: string,
    text: string,
    count: number
}


export interface PromoItemBasic_Interface {
    subtitle: string,
    type: string,
    url: string
}


export interface Grid_Interface {
    title: string,
    subtitle: string,
    img: string,
    date: string,
    _id: string
}

export interface Fetch_Data_Success_Interface {
    data: Article_Interface[];
    status: number
}

export interface Fetch_Data_Error_Interface {
    data: any[];
    status: number
}
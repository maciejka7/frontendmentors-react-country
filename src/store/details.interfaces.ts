export interface DetailsCurrency {
    code?: string
    name?: string
    symbol?: string
}

export interface DetailsLanguages {
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
}

export interface DetailsInfo {
    alpha2Code?: string
    alpha3Code?: string
    altSpellings?: string[]
    area?: number
    borders?: string[]
    callingCodes?: string[]
    capital?: string[]
    cioc?: string[]
    currencies?: DetailsCurrency[]
    demonym?: string
    flag?: string
    gini?: number
    languages?: DetailsLanguages[]
    iso639_2?: string
    name?: string
    nativeName?: string
    latlng?: Array<keyof number>
    numericCode?: string
    population?: number
    //@TODO?: add regions type
    region?: string
    regionalBlocs?: Array<keyof string>
    subregion?: string
    timezones?: Array<keyof string>
    topLevelDomain?: []
    translations?: []
}

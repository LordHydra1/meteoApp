export interface WeeklyCityWeatherInterface {
    cod?:     string;
    message?: number;
    cnt?:     number;
    list?:    List[];
    city?:    City;
}

export interface City {
    id?:         number;
    name?:       string;
    coord?:      Coord;
    country?:    string;
    population?: number;
    timezone?:   number;
    sunrise?:    number;
    sunset?:     number;
}

export interface Coord {
    lat?: number;
    lon?: number;
}

export interface List {
    dt?:         number;
    main?:       MainClass;
    weather?:    Weather[];
    clouds?:     Clouds;
    wind?:       Wind;
    visibility?: number;
    pop?:        number;
    rain?:       Rain;
    sys?:        Sys;
    dtTxt?:      Date;
}

export interface Clouds {
    all?: number;
}

export interface MainClass {
    temp?:      number;
    feelsLike?: number;
    tempMin?:   number;
    tempMax?:   number;
    pressure?:  number;
    seaLevel?:  number;
    grndLevel?: number;
    humidity?:  number;
    tempKf?:    number;
}

export interface Rain {
    the3H?: number;
}

export interface Sys {
    pod?: Pod;
}

export enum Pod {
    D = "d",
    N = "n",
}

export interface Weather {
    id?:          number;
    main?:        MainEnum;
    description?: Description;
    icon?:        string;
}

export enum Description {
    CieloCoperto = "cielo coperto",
    CieloSereno = "cielo sereno",
    NubiSparse = "nubi sparse",
    PioggiaLeggera = "pioggia leggera",
    PocheNuvole = "poche nuvole",
}

export enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain",
}

export interface Wind {
    speed?: number;
    deg?:   number;
    gust?:  number;
}

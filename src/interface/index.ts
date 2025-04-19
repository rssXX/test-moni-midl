export type Currency = 'USD';

export type CurrencyValueMap = Record<Currency, string>;

export type Chain = {
    id: number;
    name: string;
    slug: string;
    logoUrl: string;
};

export type Platform = {
    id: number;
    name: string;
    slug: string;
    logoUrl: string;
};

export type SecurityFeature = {
    shortName: string;
    name: string;
    status: boolean;
};

export type Link = {
    name: string;
    linkUrl: string;
    logoUrl: string;
};

export interface Item {
    id: number;
    address: string;
    logoUrl?: string;
    name: string;
    symbol: string;
    chain: Chain;
    platform: Platform;
    createdAt: number;
    smartFollowersCount: number;
    smartFollowersCountChange: number;
    smartMentionsCount: number;
    smartMentionsCountChange: number;
    txsBuyCount: number;
    txsSellCount: number;
    txsCountChange: number;
    volumeBuy: CurrencyValueMap;
    volumeSell: CurrencyValueMap;
    volumeChange: CurrencyValueMap;
    marketCap: CurrencyValueMap;
    marketCapChange: CurrencyValueMap;
    marketCapChangePercents: CurrencyValueMap;
    liquidity: CurrencyValueMap;
    holdersCount: number;
    holdersCountChange: number;
    security: SecurityFeature[];
    links: Link[];
};

export interface ResponseData {
    items: Item[];
    totalCount: number;
};
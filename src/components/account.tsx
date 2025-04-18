import React from 'react';
import type {Item} from '@/interface'
import Image from "next/image";
import {transformAddress} from "@/utils";

interface IAccountProps extends Pick<Item, 'name' | 'logoUrl' | 'address' | 'links'> { }

const Account: React.FC<IAccountProps> = ({name, logoUrl, address, links}) => {
    return (
        <div className={`flex items-center gap-2.5 pt-3.5 pb-4.5 pr-6 w-[158px]`}>
            <div className={`w-6 h-6 relative flex-shrink-0`}>
                <Image
                    src={logoUrl}
                    alt={`${name} avatar`}
                    loading="lazy"
                    className={`rounded-full`}
                    fill
                />
            </div>
            <div className={`flex flex-col min-w-0`}>
                <div className={`text-sm text-text truncate`}>{name}</div>
                <div className={`flex gap-1 mt-0.5`}>
                    <div className={`text-xs text-muted truncate`}>{transformAddress(address)}</div>
                    <div className={`flex gap-0.5 flex-shrink-0`}>
                        {links.map((link) => (
                            <div key={link.name}>
                                <a href={link.linkUrl} target="_blank" rel="noreferrer" className={`text-xs text-muted`}>
                                    <Image
                                        src={link.logoUrl}
                                        alt={`${name} avatar`}
                                        loading="lazy"
                                        width={12}
                                        height={12}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
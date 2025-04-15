'use client';

import React from 'react';
import { Item } from "@/interface";

interface ITableProps {
    items: Item[];
}

const Table: React.FC<ITableProps> = ({ items }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
                <colgroup>
                    <col />
                    <col style={{ width: '50px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '250px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col />
                    <col style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '84px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col style={{ width: '200px', minWidth: 'auto', maxWidth: 'auto' }} />
                    <col />
                </colgroup>
                <thead className="bg-gray-100">
                <tr>
                    <th className="sticky left-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                        Token
                    </th>
                    <th className="px-4 py-2 border border-gray-300">Created</th>
                    <th className="px-4 py-2 border border-gray-300">Smarts</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">S. M.</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">TXs</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">Volume</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">Liqudity</th>
                    <th className="px-4 py-2 border border-gray-300">MKT Cap</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">Holders</th>
                    <th className="px-4 py-2 border border-gray-300">Cng</th>
                    <th className="px-4 py-2 border border-gray-300">CV/CR/HNP/LB</th>
                    <th className="sticky right-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300"></th>
                </tr>
                </thead>
                <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className="sticky left-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                            {item.name}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">{item.createdAt}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.smartFollowersCount}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.smartFollowersCountChange}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.smartMentionsCount}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.smartMentionsCountChange}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.txsBuyCount + item.txsSellCount}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.txsCountChange}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.volumeBuy.USD + item.volumeSell.USD}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.volumeChange.USD}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.liquidity.USD}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.marketCap.USD}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.marketCapChange.USD}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.holdersCount}</td>
                        <td className="px-4 py-2 border border-gray-300">{item.holdersCountChange}</td>
                        <td className="px-4 py-2 border border-gray-300">
                            {item.security.map((secItem, index) => (
                                <span key={index}>{secItem.status ? 'Да' : 'Нет'}</span>
                            ))}
                        </td>
                        <td className="sticky right-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                            Buy
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
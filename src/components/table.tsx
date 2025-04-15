'use client';
import React from 'react';
import {Item} from "@/interface";

interface ITableProps {
    items: Item[];
}

const Table: React.FC<ITableProps> = ({items}) => {
    return (
        <div className="my-6 mx-4 overflow-x-auto bg-table rounded-lg border border-border">
            <table className="table-fixed">
                <thead
                    className=""
                >
                    <tr className="h-13">
                        <th className="sticky left-0 bg-table">Token</th>
                        <th className="">Created</th>
                        <th className="">Smarts</th>
                        <th className="">Cng</th>
                        <th className="">S. M.</th>
                        <th className="">Cng</th>
                        <th className="">TXs</th>
                        <th className="">Cng</th>
                        <th className="">Volume</th>
                        <th className="">Cng</th>
                        <th className="">Liqudity</th>
                        <th className="">MKT Cap</th>
                        <th className="">Cng</th>
                        <th className="">Holders</th>
                        <th className="">Cng</th>
                        <th className="">CV/CR/HNP/LB</th>
                        <th className="sticky right-0 bg-table"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="h-16">
                            <td className="sticky left-0 bg-table">
                                {item.name}
                            </td>
                            <td className="">{item.createdAt}</td>
                            <td className="">{item.smartFollowersCount}</td>
                            <td className="">{item.smartFollowersCountChange}</td>
                            <td className="">{item.smartMentionsCount}</td>
                            <td className="">{item.smartMentionsCountChange}</td>
                            <td className="">{item.txsBuyCount + item.txsSellCount}</td>
                            <td className="">{item.txsCountChange}</td>
                            <td className="">{item.volumeBuy.USD + item.volumeSell.USD}</td>
                            <td className="">{item.volumeChange.USD}</td>
                            <td className="">{item.liquidity.USD}</td>
                            <td className="">{item.marketCap.USD}</td>
                            <td className="">{item.marketCapChange.USD}</td>
                            <td className="">{item.holdersCount}</td>
                            <td className="">{item.holdersCountChange}</td>
                            <td className="">
                                {item.security.map((secItem, index) => (
                                    <span key={index}>{secItem.status ? 'Да' : 'Нет'}</span>
                                ))}
                            </td>
                            <td className="sticky right-0 bg-table">
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
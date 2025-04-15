'use client';
import React from 'react';
import {Item} from "@/interface";
import {TableCell} from '@/components'

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
                        <TableCell as='th' sticky="left">Token</TableCell>
                        <TableCell as='th'>Created</TableCell>
                        <TableCell as='th'>Smarts</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>S. M.</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>TXs</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>Volume</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>Liqudity</TableCell>
                        <TableCell as='th'>MKT Cap</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>Holders</TableCell>
                        <TableCell as='th'>Cng</TableCell>
                        <TableCell as='th'>CV/CR/HNP/LB</TableCell>
                        <TableCell as='th' sticky="right"></TableCell>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="h-16">
                            <TableCell sticky="left">
                                {item.name}
                            </TableCell>
                            <TableCell>{item.createdAt}</TableCell>
                            <TableCell>{item.smartFollowersCount}</TableCell>
                            <TableCell>{item.smartFollowersCountChange}</TableCell>
                            <TableCell>{item.smartMentionsCount}</TableCell>
                            <TableCell>{item.smartMentionsCountChange}</TableCell>
                            <TableCell>{item.txsBuyCount + item.txsSellCount}</TableCell>
                            <TableCell>{item.txsCountChange}</TableCell>
                            <TableCell>{item.volumeBuy.USD + item.volumeSell.USD}</TableCell>
                            <TableCell>{item.volumeChange.USD}</TableCell>
                            <TableCell>{item.liquidity.USD}</TableCell>
                            <TableCell>{item.marketCap.USD}</TableCell>
                            <TableCell>{item.marketCapChange.USD}</TableCell>
                            <TableCell>{item.holdersCount}</TableCell>
                            <TableCell>{item.holdersCountChange}</TableCell>
                            <TableCell>
                                {item.security.map((secItem, index) => (
                                    <span key={index}>{secItem.status ? 'Да' : 'Нет'}</span>
                                ))}
                            </TableCell>
                            <TableCell sticky="right">
                                Buy
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
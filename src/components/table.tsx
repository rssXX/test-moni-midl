'use client';
import React from 'react';
import Image from "next/image";
import { Item } from "@/interface";
import { Account, TableCell, ColorNumber } from '@/components'
import { formatTimeAgo, roundingToInteger, formatNumberWithSpaces } from '@/utils'
import { TransactionRatioBar } from '@/containers'
import { SubtractIcon, SuccessIcon, CrossIcon, ZapIcon } from '@/assets/icons'
import { SCELETON_ROWS } from "@/consts";

interface ITableProps {
    items: Item[];
    isLoading: boolean;
}

const Table: React.FC<ITableProps> = ({ items, isLoading }) => {
    return (
        <div className="flex justify-center my-6">
            <div className="mx-4 overflow-x-auto bg-table rounded-lg border border-border max-w-[calc(100vw-2rem)]">
                <table className="table-fixed mx-auto">
                    <colgroup>
                        <col />
                        <col style={{minWidth: '82px', maxWidth: '82px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col style={{minWidth: '96px', maxWidth: '96px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col style={{minWidth: '80px', maxWidth: '80px'}}/>
                        <col style={{minWidth: '72px', maxWidth: '72px'}}/>
                        <col/>
                        <col/>
                    </colgroup>
                    <thead>
                    <tr>
                        <TableCell
                            as='th'
                            fontWeight="semibold"
                            align="left"
                            sticky="left"
                        >
                            Token
                        </TableCell>
                        <TableCell as='th' fontWeight="semibold">Created</TableCell>
                        <TableCell as='th' className="text-muted" fontWeight="semibold">Smarts</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" align="right" fontWeight="semibold">S. M.</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" align="right" fontWeight="semibold">TXs</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" align="right" fontWeight="semibold">Volume</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" fontWeight="semibold">Liqudity</TableCell>
                        <TableCell as='th' className="text-muted" align="right" fontWeight="semibold">MKT Cap</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" align="right" fontWeight="semibold">Holders</TableCell>
                        <TableCell as='th' className="text-muted" align="left" fontWeight="semibold" withDivider dividerColor="border-primary">Cng</TableCell>
                        <TableCell as='th' className="text-muted" fontWeight="semibold">CV/CR/HNP/LB</TableCell>
                        <TableCell as='th' className="text-muted" fontWeight="semibold" sticky="right"></TableCell>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        isLoading ? (
                            Array.from({ length: SCELETON_ROWS }).map((_, index) => (
                                <tr key={`skeleton-${index}`} className="h-16 animate-pulse">
                                    <TableCell sticky="left">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    </TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell><div className="h-4 bg-gray-200 rounded"></div></TableCell>
                                    <TableCell sticky="right">
                                        <div className="h-8 bg-gray-200 rounded w-16"></div>
                                    </TableCell>
                                </tr>
                            ))
                        ) : (
                            <>
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <TableCell sticky="left">
                                            <Account name={item.name} logoUrl={item.logoUrl} address={item.address} links={item.links}/>
                                        </TableCell>
                                        <TableCell className="text-sm font-medium">
                                            <div className="flex gap-1 justify-center">
                                                <Image
                                                    src={SubtractIcon}
                                                    alt="subtract icon"
                                                    width={12}
                                                    height={12}
                                                />
                                                {formatTimeAgo(item.createdAt)}
                                            </div>
                                        </TableCell>
                                        <TableCell align="right">
                                            {formatNumberWithSpaces(item.smartFollowersCount)}
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(item.smartFollowersCountChange)}/>
                                        </TableCell>
                                        <TableCell align="right">
                                            {formatNumberWithSpaces(item.smartMentionsCount)}
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(item.smartMentionsCountChange)}/>
                                        </TableCell>
                                        <TableCell align="right">
                                            ${formatNumberWithSpaces(item.txsBuyCount + item.txsSellCount)}
                                            <TransactionRatioBar buyCount={item.txsBuyCount} sellCount={item.txsSellCount}/>
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(item.txsCountChange)}/>
                                        </TableCell>
                                        <TableCell align="right">
                                            ${formatNumberWithSpaces(roundingToInteger(item.volumeBuy.USD + item.volumeSell.USD))}
                                            <TransactionRatioBar buyCount={Number(item.volumeBuy.USD)} sellCount={Number(item.volumeSell.USD)}/>
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(roundingToInteger(item.volumeChange.USD))}/>
                                        </TableCell>
                                        <TableCell align="center">
                                            ${formatNumberWithSpaces(roundingToInteger(item.liquidity.USD))}
                                        </TableCell>
                                        <TableCell align="right">
                                            ${formatNumberWithSpaces(roundingToInteger(item.marketCap.USD))}
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(roundingToInteger(item.marketCapChange.USD))}/>
                                        </TableCell>
                                        <TableCell align="right">
                                            {formatNumberWithSpaces(item.holdersCount)}
                                        </TableCell>
                                        <TableCell withDivider>
                                            <ColorNumber value={formatNumberWithSpaces(item.holdersCountChange)} />
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex justify-center gap-3">
                                                {item.security.map((secItem) => (
                                                    <span key={`${secItem.shortName}`}>
                                                        {secItem.status ? (
                                                            <Image
                                                                src={SuccessIcon}
                                                                alt="success icon"
                                                                width={12}
                                                                height={12}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src={CrossIcon}
                                                                alt="cross icon"
                                                                width={12}
                                                                height={12}
                                                            />
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell sticky="right">
                                            <a
                                                href="#"
                                                className="px-4 py-2 rounded text-sm bg-border inline-flex items-center gap-2"
                                            >
                                                <div className="w-4 h-4 relative">
                                                    <Image
                                                        src={ZapIcon}
                                                        alt="zap icon"
                                                        fill
                                                    />
                                                </div>
                                                Buy
                                            </a>
                                        </TableCell>
                                    </tr>
                                ))}
                            </>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
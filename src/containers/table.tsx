'use client'
import React from 'react';
import {Item} from "@/interface";

interface ITableProps {
    items: Item[]
}

const Table: React.FC<ITableProps> = ({items}) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="sticky left-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                            Название
                        </th>
                        <th className="px-4 py-2 border border-gray-300">Символ</th>
                        <th className="px-4 py-2 border border-gray-300">Платформа</th>
                        <th className="px-4 py-2 border border-gray-300">Чейн</th>
                        <th className="px-4 py-2 border border-gray-300">Фолловеры</th>
                        <th className="px-4 py-2 border border-gray-300">Объём покупок (USD)</th>
                        <th className="px-4 py-2 border border-gray-300">Объём продаж (USD)</th>
                        <th className="sticky right-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                            Холдеры
                        </th>
                    </tr>
                    </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td className="sticky left-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                                {item.name}
                            </td>
                            <td className="px-4 py-2 border border-gray-300">{item.symbol}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.platform.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.chain.name}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.smartFollowersCount}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.volumeBuy.USD}</td>
                            <td className="px-4 py-2 border border-gray-300">{item.volumeSell.USD}</td>
                            <td className="sticky right-0 bg-white shadow-md z-10 px-4 py-2 border border-gray-300">
                                {item.holdersCount}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
'use client';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { itemStore } from '@/stores';
import { Table } from '@/components';
import { Item } from "@/interface";

interface IStickyTableContainerProps {
    items: Item[]
}

const StickyTableContainer: React.FC<IStickyTableContainerProps> = ({ items }) => {
    useEffect(() => {
        itemStore.hydrate(items);
    }, [items]);

    return <Table items={itemStore.items} />;
};

export default observer(StickyTableContainer);
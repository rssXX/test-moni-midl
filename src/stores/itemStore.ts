import { makeAutoObservable, runInAction } from 'mobx';
import { Item } from '@/interface';

class ItemStore {
    items: Item[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    hydrate(items: Item[]) {
        this.items = items;
    }
}

const itemStore = new ItemStore();
export default itemStore;

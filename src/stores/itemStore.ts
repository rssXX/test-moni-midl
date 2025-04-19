import { makeAutoObservable, runInAction } from 'mobx';
import { Item } from '@/interface';

class ItemStore {
    items: Item[] = [];
    isLoading = true;

    constructor() {
        makeAutoObservable(this);
    }

    hydrate(items: Item[]) {
        this.items = items;
    }

    setLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }
}

const itemStore = new ItemStore();
export default itemStore;

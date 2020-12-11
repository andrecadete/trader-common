
export interface StorageAdapter<T> {

    store(item: T);

    find(id: string): T;

    getAll(): T[];

}

import { ICache, ICachedItem} from './ICache'

interface IHash {
    [key: string] : any;
}

export class MemoryCache implements ICache {
    private cache: IHash = {}
    
    constructor() {}
    
    public async get<T>(key: string): Promise<T> {
        return this.cache[key]
    }

    public async set(key: string, item: any): Promise<void> {
        this.cache[key] = item
    }

    public async delete(key: string) : Promise<void> {
        delete this.cache[key]
    }

    public async clear(): Promise<void> {
        this.cache = {}
    }

    public async size(): Promise<number> {
        return Object.keys(this.cache).length
    }
}
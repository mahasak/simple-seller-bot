export interface ICachedItem {
  created: number;
  ttl: number;
  item: any;
}

export interface ICache {
  get<T>(key: string): Promise<T>;
  set(key: string, content: ICachedItem): Promise<void>;
  delete(key: string): Promise<void>;
  clear(): Promise<void>;
  size(): Promise<number>;
}
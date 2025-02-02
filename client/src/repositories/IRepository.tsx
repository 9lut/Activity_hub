export interface IRepository<T>{
    getAll(): Promise<T[] | null>;
    get(id: string|number): Promise<T[] | null>;
    //update(id: string|number): Promise<T | null>;
}
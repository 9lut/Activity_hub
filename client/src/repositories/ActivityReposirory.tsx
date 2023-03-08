import { IRepository } from './IRepository';
import Activity from '../models/Activity';
export class ActityRepository implements IRepository<Activity> {
    urlPrefix = "http://localhost:1337/api/activities?populate=*"
    
    async getAll(): Promise<Activity[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const Data = await resp.json();
        return Data.data;
    }
  
    async get(id: string|number): Promise<Activity[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const Data = await resp.json();
        return Data.data;
    }

    /*async update(id: string|number): Promise<ActityRepository | null> {
      const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
      const Data = await resp.json();
      return Data.data;
    }*/

}
  
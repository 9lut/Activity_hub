import { IRepository } from './IRepository';
import Activity from '../models/Activity';
import conf from '../conf';
export class ActityRepository implements IRepository<Activity> {

    urlPrefix = conf.apiPrefix
    
    async getAll(): Promise<Activity[] | null> {
        const resp = await fetch(`${this.urlPrefix}api/activities?populate=*"`);
        const Data = await resp.json();
        return Data.data;
    }
  
    async get(id: string|number): Promise<Activity[] | null> {
        const resp = await fetch(`${this.urlPrefix}api/activities?populate=*"&filters[id][$eq]=${id}`);
        const Data = await resp.json();
        return Data.data;
    }

    /*async update(id: string|number): Promise<ActityRepository | null> {
      const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
      const Data = await resp.json();
      return Data.data;
    }*/

}
  
import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    constructor() {}

    /**
     * 
     * @param key 
     * @returns 
     */
    async fetchData(body: any) {
        // return fetch data from server
    }
}

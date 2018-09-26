import { readFileSync } from 'fs';


export class ConfigService {
    constructor() { }

    getConfig(key?:string):string {
        let buffer = readFileSync('./tfjs.conf.json');
        let jsonString = buffer.toLocaleString();
        if (key){
            return JSON.parse(jsonString)[key];
        }
        return jsonString;
    }

}
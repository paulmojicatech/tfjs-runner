import { readFileSync } from 'fs';


export class ConfigService {
    constructor() { }

    getDataPath():string {
        let buffer = readFileSync('./tfjs.conf.json');
        let jsonString = buffer.toLocaleString();
        return JSON.parse(jsonString).dataPath;
    }
}
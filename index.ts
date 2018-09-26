import { ConfigService }  from './configService';

let _configSvc:ConfigService = new ConfigService();

console.log(_configSvc.getDataPath());
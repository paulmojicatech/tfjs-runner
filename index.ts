import * as _configSvc  from './services/configService';
import * as _tfjsSvc from './services/tfjsService';

// get data
let historicalData:string = _tfjsSvc.getData(_configSvc.getConfig('dataPath') + '/def_hist.json');




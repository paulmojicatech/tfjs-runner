import { ConfigService }  from './services/configService';
import { TensorflowService } from './services/tfjsService';

// create services
let _configSvc:ConfigService = new ConfigService();
let _tfjsSvc:TensorflowService = new TensorflowService();

// get data
let historicalData:string = _tfjsSvc.getData(_configSvc.getConfig('dataPath') + '/def_hist.json');
console.log(historicalData);

_tfjsSvc.predict();





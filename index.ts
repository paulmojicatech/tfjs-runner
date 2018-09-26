import { ConfigService }  from './services/configService';
import { TensorflowService } from './services/tfjsService';

// create services
let _configSvc:ConfigService = new ConfigService();
let _tfjsSvc:TensorflowService = new TensorflowService();

// get data
//let trainingData:string = _tfjsSvc.getData(_configSvc.getConfig('dataPath') + '/file1.json');

_tfjsSvc.predict();





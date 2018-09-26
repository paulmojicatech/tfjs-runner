import * as tf from '@tensorflow/tfjs';
import { readFileSync } from 'fs';
import { TensorContainer } from '@tensorflow/tfjs-core/dist/tensor_types';

export class TensorflowService {
    constructor() { }

    getData(filePath:string): string{
        let buffer = readFileSync(filePath);
        return buffer.toLocaleString();
    }
    cleanData() {

    }
    getModel() {

    }
    trainModel() {

    }
    predict(){

    }
    loss(){
        
    }

}
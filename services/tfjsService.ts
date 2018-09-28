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
        const a = tf.add(1, 2);
        console.log(a);
        a.print();
        return '';
    }
    loss(){
        
    }

}
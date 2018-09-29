import * as tf from '@tensorflow/tfjs';
import { readFileSync } from 'fs';

export function getData(filePath:string): string{
    let buffer = readFileSync(filePath);
    return buffer.toLocaleString();
}

export function cleanData() {

}

export function getModel() {

}

export function trainModel() {

}

export function predict(qbStatValue:number, defStatValue:number){
    return tf.tidy(() => {
        
    });
}

export function loss(){
    
}
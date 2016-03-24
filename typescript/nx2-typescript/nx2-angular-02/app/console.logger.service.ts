import { Injectable } from 'angular2/core';
import { ILogger } from './logger.service';

@Injectable()
export class ConsoleLogger implements ILogger {
    error(msg: any): void {
        console.error(msg);
    }

    log(msg: any): void {
        console.log(msg);
    }

    warn(msg: any): void {
        console.warn(msg);
    }
}
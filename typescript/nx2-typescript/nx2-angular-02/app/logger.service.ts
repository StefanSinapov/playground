import {OpaqueToken} from 'angular2/core';

export interface ILogger {
    error(msg: any): void;
    log(msg: any): void;
    warn(msg: any): void;
}

export let ILoggerToken = new OpaqueToken('ILogger'); 
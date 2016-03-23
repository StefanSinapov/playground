export interface ILogger {
    error(msg: any): void;
    log(msg: any): void;
    warn(msg: any): void;
}
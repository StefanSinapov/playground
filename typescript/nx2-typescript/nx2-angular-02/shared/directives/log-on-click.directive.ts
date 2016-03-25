import { Directive, HostListener, Inject } from 'angular2/core'
import { ILogger, ILoggerToken } from './../../app/logger.service';

@Directive({
    selector: '[myLogOnClick]'
})
export class LogOnClickDirective {

    constructor(@Inject(ILoggerToken) private _logger: ILogger) {

    }

    @HostListener('click')
    onClick() {
        this._logger.warn('Element clicked!');
    };
}
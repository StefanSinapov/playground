export class DomLogger {
    private element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
    }

    log(...args: string[]): void {
        args.forEach((value: string) => this.element.innerHTML += value.toString());
        this.element.innerHTML += "<br/>";
    }
}
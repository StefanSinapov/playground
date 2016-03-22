import {DomLogger} from 'domLogger'

var logger = new DomLogger('container');

// Disposable Mixin
class Disposable {
    isDisposed: boolean;

    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    isActive: boolean;

    activate() {
        this.isActive = true;
    }

    deactivate() {
        this.isActive = false;
    }
}

class SmartObject implements Disposable, Activatable {
    private interval: number;

    constructor() {
        this.interval = setInterval(() => console.log(this.isActive + ' : ' + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }

    // Disposable
    isDisposed = false;
    dispose: () => void = () => {
        clearInterval(this.interval);
        this.isDisposed = true;
    };
    // Activatable
    isActive = false;
    activate: () => void;
    deactivate: () => void;
}

applyMixins(SmartObject, [Disposable, Activatable]);

var smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
setTimeout(() => smartObj.dispose(), 5000);

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (!derivedCtor.prototype[name]) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}

interface Document {
    createElement(tagName: any): Element;
}
interface Document2 {
    createElement(tagName: string): HTMLElement;
}

interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

//window.onmousedown = function (mouseEvent) {
//    console.log(mouseEvent.buton);  //<- Now, no error is given because  
//};

var x = (a: number) => 0;
var y = (b: number, s: string) => 0;

y = x; // OK
//x = y; // Error
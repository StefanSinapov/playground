export class DataHandlersModel {
    public handlers: Array<DataHandlerModel> = [];

    constructor() {
        this.addApplicationHandlers();
    }

    public addApplicationHandlers() {
        this.handlers.push({ identifier: "GetConfig", url: "/Application/GetConfig" });
    }
}

class DataHandlerModel {
    public identifier: string;
    public url: string;
}
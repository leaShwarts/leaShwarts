import { ErrorHandler, Inject, Injectable, Injector } from "@angular/core";

@Injectable()
export class ErrorHandling implements ErrorHandler {

    constructor(@Inject(Injector) private readonly injector: Injector) {
    }
    handleError(error: any): void {
        if (error) {
            switch (error.status) {
                case undefined: // client error
                    //TODO if its client error, send to server for write in log
                    console.error(error);
                    break;
                default:
            }
        }


    }

}
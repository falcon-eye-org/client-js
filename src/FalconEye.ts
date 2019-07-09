import { EventListener } from "./EventListener";

export class FalconEye {

    private apiKey: string;
    private hasStarted: boolean;
    private eventListener: EventListener;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.hasStarted = false;
        this.eventListener = new EventListener(this);
    }

    public observe(): void {
        if (this.hasStarted)
            return;
        this.eventListener.listen();
        this.hasStarted = true;
    }

    public getAPIKey(): string {
        return this.apiKey;
    }

}

let fe: FalconEye = new FalconEye("api key");

fe.observe();


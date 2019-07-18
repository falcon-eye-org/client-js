import { ConfigProfile } from "./ConfigProfile";
import EventListener from "./event/EventListener";

export class FalconEye {

    private apiKey: string;
    private hasStarted: boolean;
    private eventListener: EventListener;
    private config: ConfigProfile;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.hasStarted = false;
        this.eventListener = new EventListener(this);
        this.config = new ConfigProfile();
    }

    public observe(): void {
        if (this.hasStarted)
            return;
        if (this.config.apiKey != this.apiKey) {
            this.config.apiKey = this.apiKey;
            this.config.profileId = "";
        }
        this.eventListener.listen();
        this.hasStarted = true;
    }

    public getAPIKey(): string {
        return this.apiKey;
    }
}

let fe: FalconEye = new FalconEye("adkfdsnfsnfdjnfdsjfsfssfd");

fe.observe();

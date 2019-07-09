import { EventListener } from "./event/EventListener";
import { ConfigProfile } from "./ConfigProfile";

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
        if (this.config.getApiKey() != this.apiKey) { // If these api key are different, then the profile id is different
            this.config.setApiKey(this.apiKey);
            this.config.setProfileId("");
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

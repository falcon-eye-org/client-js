import { ConfigProfile } from "./ConfigProfile";
import { Network } from "./network/Network";
import EventListener from "./event/EventListener";

export class FalconEye {

    private apiKey: string;
    private hasStarted: boolean;
    private eventListener: EventListener;
    private config: ConfigProfile;
    private network: Network;

    constructor(apiKey: string, address: string) {
        this.apiKey = apiKey;
        this.hasStarted = false;
        this.eventListener = new EventListener(this);
        this.config = new ConfigProfile();
        this.network = new Network(this, address);
    }

    public async observe(): Promise<void> {
        if (this.hasStarted)
            return;
        if (this.config.apiKey != this.apiKey) {
            await this.network.handshake();
            this.config.apiKey = this.apiKey;
            this.config.apiKey = this.network.getProfileId();
        }
        this.eventListener.listen();
        this.hasStarted = true;
    }

    public getAPIKey(): string {
        return this.apiKey;
    }

    public getConfig(): ConfigProfile {
        return this.config;
    }
}

let fe: FalconEye = new FalconEye("adkfdsnfsnfdjnfdsjfsfssfd", "http://localhost:3000/");

fe.observe();

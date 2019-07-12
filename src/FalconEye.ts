import { EventListener } from "./event/EventListener";
import { ConfigProfile } from "./ConfigProfile";
import { Network } from "./network/Network";
import { Storage } from "./storage/Storage";

export class FalconEye {

    private apiKey: string;
    private hasStarted: boolean;
    private eventListener: EventListener;
    private config: ConfigProfile;
    private network: Network;
    private storage: Storage;

    constructor(apiKey: string, address: string) {
        this.apiKey = apiKey;
        this.hasStarted = false;
        this.eventListener = new EventListener(this);
        this.config = new ConfigProfile();
        this.network = new Network(this, address);
        this.storage = new Storage(this);
    }

    public async observe(): Promise<void> {
        if (this.hasStarted)
            return;
        if (this.config.getApiKey() != this.apiKey) {
            await this.network.handshake();
            this.config.setApiKey(this.apiKey);
            this.config.setProfileId(this.network.getProfileId());
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

    public getStorage(): Storage {
        return this.storage;
    }
}

let fe: FalconEye = new FalconEye("adkfdsnfsnfdjnfdsjfsfssfd", "http://localhost:3000/");

fe.observe();

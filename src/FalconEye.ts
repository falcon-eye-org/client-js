import { ConfigProfile } from "./ConfigProfile";
import Network from "./network/Network";
import EventListener from "./event/EventListener";
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
        if (this.config.apiKey != this.apiKey || this.config.profileId.length === 0) {
            await this.network.handshake();
            this.config.apiKey = this.apiKey;
            this.config.profileId = this.network.getProfileId();
        }
        this.eventListener.listen();
        this.hasStarted = true;
    }

    public getConfig(): ConfigProfile {
        return this.config;
    }

    public getNetwork(): Network {
        return this.network;
    }

    public getStorage(): Storage {
        return this.storage;
    }
}

let fe: FalconEye = new FalconEye("KEY", "http://localhost:3000/");

fe.observe();

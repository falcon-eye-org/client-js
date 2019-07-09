import { Persistent } from "../node_modules/persistent-typescript/build/Persistent";

@Persistent()
export class ConfigProfile {

    private apiKey: string;
    private profileId: string;

    constructor() {
        this.apiKey = "";
        this.profileId = "";
    }

    public getApiKey(): string {
        return this.apiKey;
    }

    public getProfileId(): string {
        return this.profileId;
    }

    public setApiKey(apiKey: string): void {
        this.apiKey = apiKey;
    }

    public setProfileId(profileId: string): void {
        this.profileId = profileId;
    }
}

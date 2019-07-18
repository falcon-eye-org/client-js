import { Persistent } from "../node_modules/persistent-typescript/build/Persistent";

@Persistent()
export class ConfigProfile {

    private _apiKey: string;
    private _profileId: string;

    constructor() {
        this._apiKey = "";
        this._profileId = "";
    }

    get apiKey() {
        return this._apiKey;
    }

    set apiKey(key: string) {
        this._apiKey = key;
    }

    get profileId(): string {
        return this._profileId;
    }

    set profileId(profileId: string) {
        this._profileId = profileId;
    }

}

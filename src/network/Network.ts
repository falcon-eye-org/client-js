import { FalconEye } from "../FalconEye";
import * as request from "request-promise";

export default class Network {

    private falconEye: FalconEye;
    private address: string;
    private profileId: string;

    constructor(falconEye: FalconEye, address: string) {
        this.falconEye = falconEye;
        this.address = address;
        this.profileId = "";
    }

    public async handshake(): Promise<void> {
        let This = this;

        await request({
            method: 'POST',
            uri: this.address + (this.address.slice(-1) === '/' ? "" : "/") +  "connect/",
            body: {
                apikey: this.falconEye.getAPIKey()
            },
            json: true
        })
        .then((parsedBody: any) => {
            This.profileId = parsedBody.profileid;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to handshake the server ! " + err);
        });
    }

    public getProfileId(): string {
        return this.profileId;
    }
}
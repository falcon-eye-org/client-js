import { FalconEye } from "../FalconEye";
import * as request from "request-promise";

export default class Network {

    private falconEye: FalconEye;
    private address: string;
    private profileId: string;

    constructor(falconEye: FalconEye, address: string) {
        this.falconEye = falconEye;
        this.address = address;
        this.profileId = falconEye.getConfig().profileId;
    }

    public async handshake(): Promise<void> {
        let This = this;

        await request({
            method: 'POST',
            uri: this.address + (this.address.slice(-1) === '/' ? "" : "/") +  "connect/",
            body: {
                apiKey: this.falconEye.getConfig().apiKey
            },
            json: true
        })
        .then((parsedBody: any) => {
            This.profileId = parsedBody.data.session;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to handshake the server ! " + err);
        });
    }

    public async sendEvents(eventArray: any[]): Promise<boolean> {
        let status: boolean = false;

        await request({
            method: 'POST',
            uri: this.address + (this.address.slice(-1) === '/' ? "" : "/") +  "event/",
            headers: {
                authorization: this.falconEye.getConfig().profileId
            },
            body: {
                event: eventArray
            },
            json: true
        })
        .then((parsedBody: any) => {
            status = true;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to send the events to the server ! " + err);
            status = false;
        });
        return status;
    }

    public getProfileId(): string {
        return this.profileId;
    }
}
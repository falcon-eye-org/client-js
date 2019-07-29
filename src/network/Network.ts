import { FalconEye } from "../FalconEye";
import * as request from "request-promise";

export default class Network {

    private falconEye: FalconEye;
    private address: string;

    constructor(falconEye: FalconEye, address: string) {
        this.falconEye = falconEye;
        this.address = address + (address.slice(-1) === '/' ? "" : "/");
    }

    public async handshake(): Promise<void> {
        return request({
            method: 'POST',
            uri: this.address + "connect/",
            body: {
                apiKey: this.falconEye.getConfig().apiKey
            },
            json: true
        })
        .then((parsedBody: any) => {
            this.falconEye.getConfig().profileId = parsedBody.data.session;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to handshake the server ! " + err);
        });
    }

    public async sendEvents(eventArray: any[]): Promise<boolean> {
        let status: boolean = false;

        await request({
            method: 'POST',
            uri: this.address + "event/",
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
            console.log(parsedBody);
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to send the events to the server ! " + err);
            status = false;
        });
        return status;
    }
}
import { FalconEye } from "../FalconEye";
import * as request from "request-promise";

export default class Network {

    private falconEye: FalconEye;
    private address: string;

    constructor(falconEye: FalconEye, address: string) {
        this.falconEye = falconEye;
        this.address = address + (address.slice(-1) === '/' ? "" : "/");
    }

    public async handshake(): Promise<boolean> {
        return request({
            method: 'POST',
            uri: this.address + "connect/",
            body: {
                apiKey: this.falconEye.getConfig().apiKey
            },
            json: true
        })
        .then((parsedBody: any) => {
            let code = parsedBody.code;

            if (code === "00") {
                this.falconEye.getConfig().profileId = parsedBody.data.session;
                return true;
            } else if (code === "01") {
                console.error("[FalconEye] The specified API-KEY is not valid !");
            } else {
                console.error("[FalconEye] This shouldn't happen");
            }
            return false;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to handshake the server ! " + err);
            return false;
        });
    }

    public async sendEvents(eventArray: any[]): Promise<boolean> {
        return request({
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
            let code = parsedBody.code;

            console.log(parsedBody);
            if (code === "00") {
                return true;
            } else if (code === "02") {
                console.error("[FalconEye] You are not authenticated");
            }
            return false;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to send the events to the server ! " + err);
            return false;
        });
    }
}
import { FalconEye } from "../FalconEye";
import * as request from "request-promise";
import { Error } from "../error/Error";

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
            }
            console.log(Error.generateFromCode(code));
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
            if (code === "00")
                return true;
            console.log(Error.generateFromCode(code));
            return false;
        })
        .catch((err: any) => {
            console.error("[FalconEye] Failed to send the events to the server ! " + err);
            return false;
        });
    }
}
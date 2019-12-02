import { FalconEye } from "../FalconEye";
import { Error } from "../error/Error";
import * as superagent from "superagent";

export default class Network {

    private falconEye: FalconEye;
    private address: string;

    constructor(falconEye: FalconEye, address: string) {
        this.falconEye = falconEye;
        this.address = address + (address.slice(-1) === '/' ? "" : "/");
    }

    public async handshake(): Promise<boolean> {
        return superagent
        .post(this.address + "connect/")
        .send({ apiKey: this.falconEye.getConfig().apiKey })
        .set("accept", "json")
        .then((res: any) => {
            let parsedBody = res.body;
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
        return superagent
        .post(this.address + "event/")
        .send({ event: eventArray })
        .set("accept", "json")
        .set("authorization", this.falconEye.getConfig().profileId)
        .then((res: any) => {
            let parsedBody = res.body;
            let code = parsedBody.code;

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

import { FalconEye } from "../FalconEye";
import FalconEvent from "../event/FalconEvent";
import FalconButtonEvent from "../event/FalconButtonEvent";
import FalconWheelEvent from "../event/FalconWheelEvent";
import Network from "../network/Network";
import FalconKeyboardEvent from "../event/FalconKeyboardEvent";
import * as useragent from "useragent";

export class Storage {
    private falconEye: FalconEye;
    private packets: any[];
    private useragent = {};

    constructor(falconEye: FalconEye) {
        this.falconEye = falconEye;
        this.packets = [];
        this.fillUserAgent();
    }

    public storeEvent<T extends FalconEvent>(event: T) {
        if (this.packets.length >= 5) {
            this.falconEye.getNetwork().sendEvents(this.packets);
            this.packets = [];
        }
        if (event instanceof FalconWheelEvent) {
            this.packets.push({type: "wheel", data: event, useragent: this.useragent});
        } else if (event instanceof FalconButtonEvent) {
            this.packets.push({type: "button", data: event, useragent: this.useragent});
        } else if (event instanceof FalconKeyboardEvent) {
            this.packets.push({type: "keyboard", data: event, useragent: this.useragent});
        }
    }

    private fillUserAgent(): void {
        let ua = useragent.lookup(navigator.userAgent);
        let userAgent = {
            browser: {
                name: "",
                major: "",
                minor: "",
                patch: ""
            },
            os: {
                name: "",
                major: "",
                minor: "",
                patch: ""
            },
            device: {
                name: "",
                major: "",
                minor: "",
                patch: ""
            }
        };
        userAgent.browser.name = ua.family;
        userAgent.browser.major = ua.major;
        userAgent.browser.minor = ua.minor;
        userAgent.browser.patch = ua.patch;
        userAgent.device.name = ua.device.family;
        userAgent.device.major = ua.device.major;
        userAgent.device.minor = ua.device.minor;
        userAgent.device.patch = ua.device.patch;
        userAgent.os.name = ua.os.family;
        userAgent.os.major = ua.os.major;
        userAgent.os.minor = ua.os.minor;
        userAgent.os.patch = ua.os.patch;
        this.useragent = userAgent;
    }
}
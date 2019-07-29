import { FalconEye } from "../FalconEye";
import FalconEvent from "../event/FalconEvent";
import FalconButtonEvent from "../event/FalconButtonEvent";
import FalconWheelEvent from "../event/FalconWheelEvent";

export class Storage {
    private falconEye: FalconEye;
    private packets: any[];

    constructor(falconEye: FalconEye) {
        this.falconEye = falconEye;
        this.packets = [];
    }

    public storeEvent<T extends FalconEvent>(event: T) {
        if (this.packets.length >= 5) {
            this.falconEye.getNetwork().sendEvents(this.packets);
            this.packets = [];
        }
        if (event instanceof FalconWheelEvent) {
            this.packets.push({type: "wheel", data: event});
        } else if (event instanceof FalconButtonEvent) {
            this.packets.push({type: "button", data: event});
        }
    }
}
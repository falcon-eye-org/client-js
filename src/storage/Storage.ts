import { FalconEye } from "../FalconEye";
import FalconEvent from "../event/FalconEvent";

export class Storage {
    private falconEye: FalconEye;

    constructor(falconEye: FalconEye) {
        this.falconEye = falconEye;
    }

    public storeEvent<T extends FalconEvent>(event: T) {
        // if (typeof event == )
        console.log(typeof event);
    }
}
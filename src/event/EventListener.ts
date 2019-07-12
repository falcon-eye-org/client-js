import { FalconEye } from "../FalconEye";
import { FalconButtonEvent } from "./FalconButtonEvent";
import { FalconWheelEvent } from "./FalconWheelEvent";
import { FalconKeyboardEvent, KeyStatus } from "./FalconKeyboardEvent";

export class EventListener {

    private falconEye: FalconEye;

    constructor(fe: FalconEye) {
        this.falconEye = fe;
    }

    public listen(): void {
        this.listenClickEvent();
        this.listenWheelEvent();
    }

    private async listenClickEvent(): Promise<void> {
        window.addEventListener("click", (ev: MouseEvent) => {
            let be: FalconButtonEvent = new FalconButtonEvent(ev.screenX, ev.screenY, ev.clientX, ev.clientY, ev.button);
            console.table(be);
            this.falconEye.getStorage().storeEvent(be);
        });
    }

    private async listenWheelEvent(): Promise<void> {
        window.addEventListener("wheel", (ev: WheelEvent) => {
            let me: FalconWheelEvent = new FalconWheelEvent(ev.screenX, ev.screenY, ev.clientX, ev.clientY, ev.button,
                ev.deltaMode, ev.deltaX, ev.deltaY, ev.deltaZ);
            console.table(me);

        });
    }
}
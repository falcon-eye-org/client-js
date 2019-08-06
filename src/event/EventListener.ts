import { FalconEye } from "../FalconEye";
import FalconButtonEvent from "./FalconButtonEvent";
import FalconWheelEvent from "./FalconWheelEvent";
import FalconKeyboardEvent from "./FalconKeyboardEvent";
import { KeyStatus } from "./KeyStatus";

export default class EventListener {

    private falconEye: FalconEye;

    constructor(fe: FalconEye) {
        this.falconEye = fe;
    }

    public listen(): void {
        this.listenClickEvent();
        this.listenWheelEvent();
        this.listenKeyboardEvent();
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
            this.falconEye.getStorage().storeEvent(me);
        });
    }

    private async listenKeyboardEvent(): Promise<void> {
        window.addEventListener("keyup", (ev: KeyboardEvent) => {
            let ke: FalconKeyboardEvent = new FalconKeyboardEvent(ev.key, ev.code, KeyStatus.KEYUP);

            console.table(ke);
            this.falconEye.getStorage().storeEvent(ke);
        });
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            let ke: FalconKeyboardEvent = new FalconKeyboardEvent(ev.key, ev.code, KeyStatus.KEYDOWN);

            console.table(ke);
            this.falconEye.getStorage().storeEvent(ke);
        });
    }
}
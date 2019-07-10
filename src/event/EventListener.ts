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
        this.listenKeyboardEvents();
    }

    private async listenClickEvent(): Promise<void> {
        window.addEventListener("click", (ev: MouseEvent) => {
            let be: FalconButtonEvent = new FalconButtonEvent(ev.screenX, ev.screenY, ev.clientX, ev.clientY, ev.button);
            console.table(be);
        });
    }

    private async listenWheelEvent(): Promise<void> {
        window.addEventListener("wheel", (ev: WheelEvent) => {
            let me: FalconWheelEvent = new FalconWheelEvent(ev.screenX, ev.screenY, ev.clientX, ev.clientY, ev.button,
                ev.deltaMode, ev.deltaX, ev.deltaY, ev.deltaZ);
            console.table(me);

        });
    }

    private async listenKeyboardEvents(): Promise<void> {
        window.addEventListener("keydown", keyboardHandler);
        window.addEventListener("keypress", keyboardHandler);
        window.addEventListener("keyup", keyboardHandler);

        function keyboardHandler(ev: KeyboardEvent) {
            let ke: FalconKeyboardEvent = new FalconKeyboardEvent(ev.key, ev.code, KeyStatus.KEYDOWN);
            console.table(ke);
        }
    }
}
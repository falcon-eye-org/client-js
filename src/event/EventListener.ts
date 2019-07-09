import { FalconEye } from "../FalconEye";
import { ButtonEvent } from "./ButtonEvent";

export class EventListener {

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
        window.addEventListener("click", (ev: MouseEvent) => { // variable 'button' -> 0 left, 2 right, 1 middle
            console.log(`Click`);
            let be: ButtonEvent = new ButtonEvent(ev.screenX, ev.screenY, ev.clientX, ev.clientY, ev.button);
            console.log(be);
        });
    }

    private async listenWheelEvent(): Promise<void> {
        window.addEventListener("wheel", (ev: WheelEvent) => {
            console.log(`Wheel`);
            console.log(ev);
        });
    }

    private async listenKeyboardEvent(): Promise<void> {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            console.log(`Key`);
            console.log(ev);
        });
    }
}
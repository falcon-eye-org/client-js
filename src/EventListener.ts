import { FalconEye } from "./FalconEye";

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
        });
    }

    private async listenWheelEvent(): Promise<void> {
        window.addEventListener("wheel", (ev: WheelEvent) => {
            console.log(`Wheel`);
        });
    }

    private async listenKeyboardEvent(): Promise<void> {
        window.addEventListener("keydown", (ev: KeyboardEvent) => {
            console.log(`Key`);
        });
    }
}
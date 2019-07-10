import { FalconEvent } from "./FalconEvent";

export enum KeyStatus {
    KEYDOWN,
    KEYPRESS,
    KEYUP
}

export class FalconKeyboardEvent extends FalconEvent {

    private key: string;
    private keycode: string;
    private keystatus: KeyStatus;

    constructor(key: string, keycode: string, keystatus: KeyStatus) {
        super();
        this.key = key;
        this.keycode = keycode;
        this.keystatus = keystatus;
    }

    public getKey(): string {
        return this.key;
    }

    public getKeyCode(): string {
        return this.keycode;
    }

    public getKeyStatus(): KeyStatus {
        return this.keystatus;
    }
}

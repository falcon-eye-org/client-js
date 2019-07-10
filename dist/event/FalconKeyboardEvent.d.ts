import { FalconEvent } from "./FalconEvent";
export declare enum KeyStatus {
    KEYDOWN = 0,
    KEYPRESS = 1,
    KEYUP = 2,
}
export declare class FalconKeyboardEvent extends FalconEvent {
    private key;
    private keycode;
    private keystatus;
    constructor(key: string, keycode: string, keystatus: KeyStatus);
    getKey(): string;
    getKeyCode(): string;
    getKeyStatus(): KeyStatus;
}

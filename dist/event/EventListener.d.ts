import { FalconEye } from "../FalconEye";
export declare class EventListener {
    private falconEye;
    constructor(fe: FalconEye);
    listen(): void;
    private listenClickEvent();
    private listenWheelEvent();
    private listenKeyboardEvents();
}

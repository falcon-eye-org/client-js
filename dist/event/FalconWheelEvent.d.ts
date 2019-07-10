import { FalconButtonEvent, ButtonType } from "./FalconButtonEvent";
export declare class FalconWheelEvent extends FalconButtonEvent {
    private deltaMode;
    private deltaX;
    private deltaY;
    private deltaZ;
    constructor(screenX: number, screenY: number, x: number, y: number, buttonType: ButtonType, deltaMode: number, deltaX: number, deltaY: number, deltaZ: number);
    getDeltaMode(): number;
    getDeltaX(): number;
    getDeltaY(): number;
    getDeltaZ(): number;
}

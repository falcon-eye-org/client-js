import { ButtonType } from "./ButtonType"
import FalconButtonEvent from "./FalconButtonEvent";

export default class FalconWheelEvent extends FalconButtonEvent {

    private deltaMode: number;
    private deltaX: number;
    private deltaY: number;
    private deltaZ: number;

    constructor(screenX: number, screenY: number, x: number, y: number, buttonType: ButtonType,
        deltaMode: number, deltaX: number, deltaY: number, deltaZ: number) {
        super(screenX, screenY, x, y, buttonType);
        this.deltaMode = deltaMode;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.deltaZ = deltaZ;
    }

    public getDeltaMode(): number {
        return this.deltaMode;
    }

    public getDeltaX(): number {
        return this.deltaX;
    }

    public getDeltaY(): number {
        return this.deltaY;
    }

    public getDeltaZ(): number {
        return this.deltaZ;
    }
}
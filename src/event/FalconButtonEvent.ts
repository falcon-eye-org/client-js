import { FalconEvent } from "./FalconEvent";

export enum ButtonType {
    LEFT,
    MIDDLE,
    RIGHT
}

export class FalconButtonEvent extends FalconEvent {
    private screenX: number;
    private screenY: number;
    private x: number;
    private y: number;
    private buttonType: ButtonType;

    constructor(screenX: number, screenY: number, x: number, y: number, buttonType: ButtonType) {
        super();
        this.screenX = screenX;
        this.screenY = screenY;
        this.x = x;
        this.y = y;
        this.buttonType = buttonType;
    }

    public getScreenX(): number {
        return this.screenX;
    }

    public getScreenY(): number {
        return this.screenY;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public getButtonType(): ButtonType {
        return this.buttonType;
    }
}

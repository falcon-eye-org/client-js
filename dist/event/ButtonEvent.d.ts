import { Event } from "./Event";
export declare enum ButtonType {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
}
export declare class ButtonEvent extends Event {
    private screenX;
    private screenY;
    private x;
    private y;
    private buttonType;
    constructor(screenX: number, screenY: number, x: number, y: number, buttonType: ButtonType);
    getScreenX(): number;
    getScreenY(): number;
    getX(): number;
    getY(): number;
    getButtonType(): ButtonType;
}

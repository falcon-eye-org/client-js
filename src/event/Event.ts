export class Event {
    private maxScreenX: number;
    private maxScreenY: number;
    private maxX: number;
    private maxY: number;

    constructor() {
        this.maxScreenX = screen.width;
        this.maxScreenY = screen.height;
        this.maxX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.maxY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    public getMaxScreenX(): number {
        return this.maxScreenX;
    }

    public getMaxScreenY(): number {
        return this.maxScreenY;
    }

    public getMaxX(): number {
        return this.maxX;
    }

    public getMaxY(): number {
        return this.maxY;
    }
}
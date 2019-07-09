export declare class FalconEye {
    private apiKey;
    private hasStarted;
    private eventListener;
    constructor(apiKey: string);
    observe(): void;
    getAPIKey(): string;
}

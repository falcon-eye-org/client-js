export declare class FalconEye {
    private apiKey;
    private hasStarted;
    private eventListener;
    private config;
    constructor(apiKey: string);
    observe(): void;
    getAPIKey(): string;
}

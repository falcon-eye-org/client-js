
export class Error {

    private static errorList: any = {
        "00": "No Error",
        "01": "Invalid API Key",
        "02": "Authentification failed"
    };

    /**
     * Generates a message from an error code
     * @param code error code
     */
    public static generateFromCode(code: string): string {
        if (this.errorList.hasOwnProperty(code))
            return "[FalconEye] " + this.errorList[code];
        return "";
    }
}

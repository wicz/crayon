import { Request } from '../router';
export declare class Locator {
    private window;
    constructor(window?: Window);
    getLocation(): {
        ancestorOrigins: DOMStringList;
        hash: string;
        host: string;
        hostname: string;
        href: string;
        origin: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        assign(url: string): void;
        reload(): void;
        reload(forcedReload: boolean): void;
        replace(url: string): void;
    };
    generateRequest(pattern: string, params: Record<string, string>): Request;
}

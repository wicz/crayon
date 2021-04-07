export declare class Request {
    routePattern: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    params: Record<string, string>;
    query: Record<string, string>;
    constructor(routePattern: string, hash: string, host: string, hostname: string, href: string, origin: string, pathname: string, port: string, protocol: string, search: string, params?: Record<string, string>, query?: Record<string, string>);
}

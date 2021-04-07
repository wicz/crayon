import { handlerFunc } from '../router';
export declare type ParamMap = Record<string, string>;
export interface PatternMap {
    key: string;
    params: Record<string, string>;
}
export interface Route {
    params: ParamMap;
    pattern: string;
    patterns: PatternMap[];
    handlers: handlerFunc[];
}
export declare class RouteMap {
    middleware: handlerFunc[];
    routes: Record<string, handlerFunc[]>;
    add(path: string, ...handlers: handlerFunc[]): void;
    addMiddleware(...handlers: handlerFunc[]): void;
    findWithPathname(pathname: string): Route | undefined;
}

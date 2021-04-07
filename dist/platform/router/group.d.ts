import { handlerFunc } from "./types";
export declare class Group {
    base: string;
    middleware: handlerFunc[];
    routes: Record<string, handlerFunc[]>;
    constructor(base: string);
    path(path: string, ...handlers: handlerFunc[]): void;
    use(handler: handlerFunc): void;
}

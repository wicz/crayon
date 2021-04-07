export declare enum HistoryType {
    push = "PUSH",
    back = "BACK",
    forward = "FORWARD",
    replace = "REPLACE"
}
export interface HistoryEvent {
    type: string;
    from: string;
    to: string;
}
export declare class History {
    private window;
    entries: string[];
    events: HistoryEvent[];
    onEvent: import("crayon-kit/dist/event-stream/beacon").Beacon<HistoryEvent>;
    document: Document;
    onPop: () => void;
    readonly lastEvent: HistoryEvent;
    readonly currentEvent: HistoryEvent;
    readonly lastRoute: string;
    readonly currentRoute: string;
    constructor(window?: Window);
    destroy(): void;
    push(path: string): void;
    pop(): void;
    replace(path: string): void;
}

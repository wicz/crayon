import { History } from '../history';
import { Router, RouterEvent } from "../router";
export declare class SharedState {
    history: History;
    routers: Record<string, Router>;
    events: import("crayon-kit/dist/event-stream/beacon").Beacon<RouterEvent>;
    constructor(history: History);
    addRouter(router: Router): void;
    removeRouter(router: Router): void;
}
export declare const getSharedState: (_window?: Window) => SharedState | undefined;
export declare const setSharedState: (sharedState: SharedState, _window?: Window) => void;

export * from './platform/router';
export * from './platform/mount';
export * from './platform/history';
export * from './platform/locator';
export * from './platform/route-map';
export * from './platform/shared-state';
export * from './platform/router';
export * from './sdk';
import { Router as OGRouter, Group as OGGroup } from './platform/router';
export declare const crayon: {
    create: (id?: string, _window?: Window, sharedState?: import("./platform/shared-state").SharedState | undefined) => OGRouter;
    group: (base: string, callback?: ((group: OGGroup) => void) | undefined) => OGGroup;
};
export declare module crayon {
    type Router = OGRouter;
    type Group = OGGroup;
}
export default crayon;

declare type RouteTargets = {
    length: number;
    entering: HTMLElement;
    leaving: HTMLElement | undefined;
};
export declare const getRouteTargets: (selector: string) => RouteTargets;
export {};

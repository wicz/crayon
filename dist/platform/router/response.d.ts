declare type LeaveAction = () => void;
export declare class Response {
    ctx: Record<string, any>;
    hasCompleted: boolean;
    leaveActions: LeaveAction[];
    runOnLeave(): void;
    onLeave(cb: LeaveAction): void;
    end(): void;
    unmount(...args: any): void | Promise<void>;
    mount(...args: any): void | Promise<void>;
    redirect(path: string): void;
}
export {};

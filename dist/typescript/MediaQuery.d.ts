import React from "react";
declare type Orientation = "landscape" | "portrait";
export interface MediaQuery {
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    minAspectRatio?: number;
    maxAspectRatio?: number;
    minPixelRatio?: number;
    maxPixelRatio?: number;
    orientation?: Orientation;
    condition?: boolean;
    platform?: string;
}
export declare const isInInterval: (value: number, min?: number | undefined, max?: number | undefined) => boolean;
export declare const mediaQuery: ({ minWidth, maxWidth, minHeight, maxHeight, minAspectRatio, maxAspectRatio, orientation, platform, minPixelRatio, maxPixelRatio, condition }: MediaQuery, width: number, height: number) => boolean;
interface MediaQueryProps extends MediaQuery {
    children: React.ReactNode;
}
declare const _default: ({ children, ...props }: MediaQueryProps) => React.ReactNode;
export default _default;

import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { MediaQuery } from "./MediaQuery";
declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
interface MediaQueryStyle<T> {
    query: MediaQuery;
    style: NamedStyles<T>;
}
export declare const getStylesheet: <T extends {}>({ width, height }: {
    width: number;
    height: number;
}, styles: MediaQueryStyle<T>[]) => NamedStyles<T>;
export declare const useStylesheet: <T extends {}>(styles: MediaQueryStyle<T>[]) => NamedStyles<T>;
export {};

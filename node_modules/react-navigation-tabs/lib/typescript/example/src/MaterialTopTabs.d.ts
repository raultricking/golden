import * as React from 'react';
declare const _default: React.ComponentType<Pick<import("../../src/utils/createTabNavigator").NavigationViewProps & {
    keyboardDismissMode?: "none" | "on-drag" | undefined;
    swipeEnabled?: boolean | undefined;
    swipeDistanceThreshold?: number | undefined;
    swipeVelocityThreshold?: number | undefined;
    onSwipeStart?: (() => void) | undefined;
    onSwipeEnd?: (() => void) | undefined;
    initialLayout?: {
        width?: number | undefined;
        height?: number | undefined;
    } | undefined;
    lazy?: boolean | undefined;
    lazyPlaceholderComponent?: React.ComponentClass<{
        route: {
            key: string;
            routeName: string;
        };
    }, any> | React.FunctionComponent<{
        route: {
            key: string;
            routeName: string;
        };
    }> | undefined;
    tabBarComponent?: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    tabBarOptions?: import("../../src/types").MaterialTabBarOptions | undefined;
    tabBarPosition?: "top" | "bottom" | undefined;
    sceneContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    navigation: import("../../src").NavigationTabProp<import("react-navigation").NavigationRoute<import("react-navigation").NavigationParams>, import("react-navigation").NavigationParams>;
    descriptors: import("../../src/types").SceneDescriptorMap;
    screenProps?: unknown;
}, "style" | "navigation" | "descriptors" | "screenProps" | "lazy" | "tabBarComponent" | "tabBarOptions" | "tabBarPosition" | "keyboardDismissMode" | "swipeEnabled" | "swipeDistanceThreshold" | "swipeVelocityThreshold" | "onSwipeStart" | "onSwipeEnd" | "initialLayout" | "lazyPlaceholderComponent" | "sceneContainerStyle"> & {
    navigationConfig: any;
}>;
export default _default;

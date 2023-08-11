import { Dimensions, StatusBar } from "react-native";

export function ResponsiveFontSize(fontSize, standardScreenHeight = 720) {
    const { height, width } = Dimensions.get("window");
    const standardLength = width > height ? width : height;
    const offset =
        width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

    const deviceHeight = Platform.OS === "android"
        ? standardLength - offset
        : standardLength;

    const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
    return Math.round(heightPercent);
}

export const FONTS_SIZE = {
    10: ResponsiveFontSize(10),
    12: ResponsiveFontSize(12),
    14: ResponsiveFontSize(14),
    16: ResponsiveFontSize(16),
    18: ResponsiveFontSize(18),
    20: ResponsiveFontSize(20),
    22: ResponsiveFontSize(22),
    24: ResponsiveFontSize(24),
    26: ResponsiveFontSize(26),
    28: ResponsiveFontSize(28),
    32: ResponsiveFontSize(32),
    36: ResponsiveFontSize(36),
    64: ResponsiveFontSize(64),
    72: ResponsiveFontSize(72),
};
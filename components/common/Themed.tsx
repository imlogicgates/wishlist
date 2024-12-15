/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  View as DefaultView,
} from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps &
  DefaultTextProps & {
    type?: "header" | "paragraph";
  };

export type ViewProps = ThemeProps & DefaultView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    darkColor,
    type = "paragraph",
    className = "",
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const defaultStyles = {
    header: "font-bold font-samsung-sharp",
    paragraph: "font-open-sans",
  };

  const combinedStyle = [{ color }, style];

  return (
    <DefaultText
      style={combinedStyle}
      className={`${
        type ? defaultStyles[type] : defaultStyles["paragraph"]
      } ${className}`}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

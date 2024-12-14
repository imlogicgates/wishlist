import { Text, TextProps } from "@/components";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style]} className="text-space-mono" />;
}

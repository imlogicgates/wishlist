import { Control, FieldValues, Path, useController } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface InputProps<T extends FieldValues>
  extends Omit<TextInputProps, "value"> {
  label: string;
  control: Control<T>;
  name: Path<T>;
}

export const Input = <T extends FieldValues>({
  label,
  control,
  name,
  ...textInputProps
}: InputProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return (
    <TextInput
      {...textInputProps}
      placeholder={label}
      value={value}
      onChangeText={onChange}
    />
  );
};

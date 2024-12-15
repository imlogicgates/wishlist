import React from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface InputProps<T extends FieldValues>
  extends Omit<TextInputProps, "value"> {
  control: Control<T>;
  name: Path<T>;
}

export const Input = <T extends FieldValues>({
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
    <TextInput {...textInputProps} value={value} onChangeText={onChange} />
  );
};

import { Wish } from "@/schemas/Wish";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { Button } from "react-native";
import { View } from "../common";
import { Input } from "../form";

type FormData = Partial<Wish>;

type Props = {
  onSubmit: (data: FormData) => void;
  wish?: Wish;
};

export const WishItemForm = ({ onSubmit, wish }: Props) => {
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: wish?.name || "",
      description: wish?.description || "",
    },
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
    router.back();
  };

  return (
    <View style={{ gap: 12, padding: 16 }}>
      <Input control={control} name="name" label="Name" />
      <Input
        control={control}
        name="description"
        label="Description"
        multiline
      />

      <Button
        title={wish ? "Update" : "Create"}
        onPress={handleSubmit(handleFormSubmit)}
      />
    </View>
  );
};

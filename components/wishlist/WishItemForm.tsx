import { Wish } from "@/schemas/Wish";
import { router } from "expo-router";
import { useForm } from "react-hook-form";
import { View } from "../common";
import { Button, Input } from "../form";

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
      <Input
        control={control}
        name="name"
        label="Name"
        className="border-2 border-gray-300 rounded-lg text-xl px-4 py-2 font-samsung-sharp"
      />
      <Input
        control={control}
        name="description"
        label="Description"
        className="border-2 border-gray-300 rounded-lg text-xl px-4 py-2 font-samsung-sharp"
        multiline
      />

      <Button
        title={wish ? "Update" : "Create"}
        onPress={handleSubmit(handleFormSubmit)}
      />
    </View>
  );
};

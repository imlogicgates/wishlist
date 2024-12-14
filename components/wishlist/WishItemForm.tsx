import { useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { Wish } from "../../schemas/Wish";
import { Input } from "../form";

type FormData = {
  name: string;
  description?: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
  wish?: Wish;
};

export const WishItemForm = ({ onSubmit, wish }: Props) => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: wish?.name || "",
      description: wish?.description || "",
    },
  });

  return (
    <View style={{ gap: 12, padding: 16 }}>
      <Input control={control} name="name" label="Name" />

      <Input
        control={control}
        name="description"
        label="Description"
        multiline
      />

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        {wish ? "Update" : "Create"}
      </TouchableOpacity>
    </View>
  );
};

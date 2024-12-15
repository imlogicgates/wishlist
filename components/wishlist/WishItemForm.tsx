import { Wish } from "@/schemas/Wish";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "../common";
import { SuccessModal } from "../common/SuccessModal";
import { Button, Input } from "../form";

type FormData = Partial<Wish>;

type Props = {
  onSubmit: (data: FormData) => void;
  wish?: Wish;
};

export const WishItemForm = ({ onSubmit, wish }: Props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: wish?.name || "",
      description: wish?.description || "",
    },
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    router.back();
  };

  return (
    <View className="flex-1 flex-col gap-3 p-6">
      <Input
        control={control}
        name="name"
        label="Name"
        className="border-b border-gray-300 rounded-lg text-lg px-6 py-3 font-samsung-sharp"
      />
      <Input
        control={control}
        name="description"
        label="Description"
        className="border-b border-gray-300 rounded-lg text-lg px-6 py-3 font-samsung-sharp"
        multiline
      />

      <Button
        title={wish ? "Update" : "Create"}
        onPress={handleSubmit(handleFormSubmit)}
      />

      <SuccessModal
        visible={showSuccess}
        onClose={handleClose}
        message={`Wish ${wish ? "updated" : "created"} successfully!`}
      />
    </View>
  );
};

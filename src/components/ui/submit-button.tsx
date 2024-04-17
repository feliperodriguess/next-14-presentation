"use client";

import { useFormStatus } from "react-dom";

import { Button, ButtonProps } from "@/components/ui";

interface SubtmitButtonProps extends ButtonProps {}

export function SubmitButton({ ...props }: SubtmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full"
      isLoading={pending}
      variant="secondary"
      {...props}
    />
  );
}

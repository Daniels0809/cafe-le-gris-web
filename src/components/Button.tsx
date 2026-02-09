"use client";

import { useRouter } from "next/navigation";
import { ButtonProps } from "@/types";

export default function Button({ page, label = "Ver el menú" }: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${page}`);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-2 border border-accent-muted text-foreground font-medium tracking-wide hover:bg-accent-muted/10 transition-colors"
    >
      {label}
    </button>
  );
}

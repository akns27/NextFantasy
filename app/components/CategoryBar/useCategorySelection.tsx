import { useState } from "react";

export const useCategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return { selectedCategory, setSelectedCategory };
};

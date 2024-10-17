//useCategorySelection
//카테고리 선택 상태 관리
import { useState } from "react";

export const useCategorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
//선택된 카테고리의 ID를 숫자로 저장하거나 선택된 카테고리가 없을 경우 null을 저장

  return { selectedCategory, setSelectedCategory };
};

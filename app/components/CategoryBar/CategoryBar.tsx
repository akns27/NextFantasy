//CategoryBar.tsx
'use client';//클라이언트라고 표시

import CategoryItem from "../../components/CategoryBar/CategoryItem";
import SoloIcon from "../../public/images/person.svg";
import GroupIcon from "../../public/images/diversity.svg";
import FoodIcon from "../../public/images/food.svg";
import DomesticIcon from "../../public/images/flag.svg";
import OverseasIcon from "../../public/images/luggage.svg";
import WinterIcon from "../../public/images/winter.svg";
import {
  CategoryContainer,
  CategoryWholeContainer,
} from "@/app/components/CategoryBar/CategoryBar.css";

import * as GlobalStyle from "../../style/global.css"
import { useState } from "react";
import { useCategorySelection } from './useCategorySelection';


const CategoryBar = ():JSX.Element => {
  const {selectedCategory, setSelectedCategory} = useCategorySelection();

  const categories = [
    { icon: DomesticIcon, alt: "국내 여행", text: "국내" },
    { icon: OverseasIcon, alt: "해외 여행", text: "해외" },
    { icon: SoloIcon, alt: "혼자 여행", text: "혼여행" },
    { icon: GroupIcon, alt: "함께 여행", text: "함께 여행" },
    { icon: FoodIcon, alt: "맛집 탐방", text: "맛집 탐방" },

    { icon: WinterIcon, alt: "겨울 여행", text: "겨울" },
  ];



  

  return (
    <div className={CategoryWholeContainer}>
      <div className={CategoryContainer} style={{color: GlobalStyle.vars.colors.gray[400]}}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            icon={category.icon}
            alt={category.alt}
            text={category.text}
            isSelected={selectedCategory === index}
            onClick={() => setSelectedCategory(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
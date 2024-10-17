// CategoryItem.tsx

import * as GlobalStyles from "../../style/global.css";
import * as CategoryStyles from "./CategoryBar.css";
import Image from "next/image";

//타입 지정
interface CategoryItemProps {
  icon: string;
  alt: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryItem = ({ icon, alt, text, isSelected, onClick }: CategoryItemProps):JSX.Element  => {
  return (
    <div
      className={`${CategoryStyles.CategorySubContainer} ${GlobalStyles.label2} ${
        isSelected ? CategoryStyles.SelectedCategory : ''
      }`}
      onClick={onClick}
    >
      <Image src={icon} alt={alt} width={36} height={36}/>
      <span>{text}</span>
    </div>
  );
};

export default CategoryItem;
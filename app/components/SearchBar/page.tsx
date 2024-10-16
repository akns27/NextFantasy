import { SearchBarStyle, inputStyle } from "./SearchBar.css";
import searchIcon from "../../public/images/search.svg";
import Image from "next/image";
import * as globalStyles from "../../style/global.css";

const SearchBar = () => {
  return (
    <div className={SearchBarStyle}>
    <Image 
      src={searchIcon}
      alt="검색 아이콘"
      width={28}
      height={28}
    />
    <input
      type="text"
      placeholder="원하는 패키지를 검색해보세요"
      className={inputStyle}
    />
  </div>
  );
};

export default SearchBar;

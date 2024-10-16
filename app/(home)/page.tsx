import CategoryBar from "../components/CategoryBar/CategoryBar";
import PackageHomeInfoCard from "../components/PackageHomeInfoCard/page";
import SearchBar from "../components/SearchBar/page";
import * as globalStyles from "../style/global.css";
import * as styles from "../components/PackageHomeInfoCard/PackageHomeInfoCard.css";

export default function Home() {
  return (
    <div className={globalStyles.MobileContainer}>
      <SearchBar/>
      <CategoryBar/>
      <PackageHomeInfoCard/>
      
    </div>
  );
}

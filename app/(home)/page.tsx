import CategoryBar from "../components/CategoryBar/CategoryBar";
import PackageHomeInfoCard from "../components/PackageHomeInfoCard/page";
import SearchBar from "../components/SearchBar/page";
import * as globalStyles from "../style/global.css";
import * as styles from "../components/PackageHomeInfoCard/PackageHomeInfoCard.css";
import { packageData } from "../data/packageData";
import PackageList from "../components/client/PackageList";

//(home)/page.tsx
export default function Home() {
  return (
    <div className={globalStyles.MobileContainer}>
      <div className={globalStyles.fixedHeader}>
      <SearchBar />
      <CategoryBar />
      </div>
      <div className={globalStyles.scrollableContent}>
      <PackageList initialPackages={packageData} />
      </div>
    </div>
  );
}

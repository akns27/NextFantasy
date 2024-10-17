'use client';

import { useState } from 'react';
import CategoryBar from "../components/CategoryBar/CategoryBar";
import SearchBar from "../components/SearchBar/page";
import * as globalStyles from "../style/global.css";
import PackageList from "../components/client/PackageList";
import { packageData } from "../data/packageData";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className={globalStyles.MobileContainer}>
      <div className={globalStyles.fixedHeader}>
        <SearchBar />
        <CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className={globalStyles.scrollableContent}>
        <PackageList initialPackages={packageData} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
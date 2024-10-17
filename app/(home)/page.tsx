'use client';

import { useState } from 'react';
import CategoryBar from "../components/CategoryBar/CategoryBar";
import SearchBar from "../components/SearchBar/page";
import * as globalStyles from "../style/global.css";
import PackageList from "../components/client/PackageList";
import { packageData } from "../data/packageData";
import TopNav from "../public/images/OS/Bar/Top Navigation.svg";
import Image from 'next/image';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className={globalStyles.MobileContainer}>
      <Image src={TopNav} alt="상단 내비게이션" className={TopNav}/>
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
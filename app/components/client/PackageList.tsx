'use client';

import React, { useState } from 'react';
import PackageHomeInfoCard from "../PackageHomeInfoCard/page";

interface PackageInfo {
  id: number;
  image: string;
  name: string;
  rating: number;
  startDate: string;
  endDate: string;
  price: number;
}

interface PackageListProps {
  initialPackages: PackageInfo[];
}


const PackageList = ({ initialPackages }:PackageListProps):JSX.Element => {
  const [packages, setPackages] = useState<PackageInfo[]>(initialPackages);

  return (
    <div>
      {packages.map((pkg) => (
        <PackageHomeInfoCard key={pkg.id} packageInfo={pkg} />
      ))}
    </div>
  );
};

export default PackageList;
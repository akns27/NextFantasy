// 'use client';

// import React, { useState } from 'react';
// import PackageHomeInfoCard from "../PackageHomeInfoCard/page";

// interface PackageInfo {
//   id: number;
//   image: string;
//   name: string;
//   rating: number;
//   startDate: string;
//   endDate: string;
//   price: number;
// }

// interface PackageListProps {
//   initialPackages: PackageInfo[];
// }


// const PackageList = ({ initialPackages }:PackageListProps):JSX.Element => {
//   const [packages, setPackages] = useState<PackageInfo[]>(initialPackages);

//   return (
//     <div>
//       {packages.map((pkg) => (
//         <PackageHomeInfoCard key={pkg.id} packageInfo={pkg} />
//       ))}
//     </div>
//   );
// };

// export default PackageList;

'use client';

import React, { useState, useEffect } from 'react';
import PackageHomeInfoCard from "../PackageHomeInfoCard/page";

interface PackageInfo {
  id: number;
  category: string;
  image: string;
  name: string;
  rating: number;
  startDate: string;
  endDate: string;
  price: number;
}

interface PackageListProps {
  initialPackages: PackageInfo[];
  selectedCategory: string | null;
}

const PackageList = ({ initialPackages, selectedCategory }: PackageListProps): JSX.Element => {
  const [filteredPackages, setFilteredPackages] = useState<PackageInfo[]>(initialPackages);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPackages(initialPackages.filter(pkg => pkg.category === selectedCategory));
    } else {
      setFilteredPackages(initialPackages);
    }
  }, [selectedCategory, initialPackages]);

  return (
    <div>
      {filteredPackages.map((pkg) => (
        <PackageHomeInfoCard key={pkg.id} packageInfo={pkg} />
      ))}
    </div>
  );
};

export default PackageList;
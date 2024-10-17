'use client';

import { useParams } from 'next/navigation';
import { packageData } from '../../data/packageData';
import * as globalStyles from '../../style/global.css';

export default function PackageDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : null;
  const packageInfo = id !== null ? packageData.find(pkg => pkg.id === id) : null;

  if (!packageInfo) {
    return <div>Package not found</div>;
  }

  return (
    <div className={globalStyles.MobileContainer}>
      <h1>{packageInfo.name}</h1>
      <h1>세부페이지</h1>
      {/* Add more details about the package here */}
    </div>
  );
}
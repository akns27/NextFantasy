// app> package > [id] > pages.tsx

'use client';
import { useParams } from 'next/navigation';
import { packageData } from '../../data/packageData';
import * as globalStyles from '../../style/global.css';
import Image from 'next/image';
import * as packageDetailStyles from '../../style/packageDetail.css'
import ProfileCard from '@/app/components/ProfileCard/page';


export default function PackageDetail() {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id, 10) : null;
  const packageInfo = id !== null ? packageData.find(pkg => pkg.id === id) : null;

  if (!packageInfo) {
    return <div>찾는 패키지 정보가 없어요</div>;
  }


  return (
    <div className={globalStyles.MobileContainer}>
      <div className={packageDetailStyles.Wrap}>
        {/* <div className={packageDetailStyles.BackPage}><Image src={}></Image></div> */}
      <Image src={packageInfo.image} alt="패키지 소개 이미지" className={packageDetailStyles.datailImage} width={375} height={540}/>
      <div className={packageDetailStyles.detailTitle}>{packageInfo.name}</div>
      </div>
      <ProfileCard/>
    </div>
  );

}
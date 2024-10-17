import React from 'react';
import Image from 'next/image';
import { container, textContainer, title, description, imageStyle } from './ProfileCard.css';


const ProfileCard = () => {
  return (
    <div className={container}>
      <div className={textContainer}>
        <h2 className={title}>안녕하세요<br/>저는 신정환입니다</h2>
        <p className={description}>
          저는 제주도에서 50년 넘게 산 신정환입니다. 오랜 산만큼 숨겨진 맛집이나 멋진 경치를 누구보다도 잘 안다고 자부할 수 있습니다.
        </p>
      </div>
      <Image 
        src="https://github.com/akns27/EssetStorage/blob/master/%E1%84%82%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3/%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%83%E1%85%A9.jpg?raw=true" 
        alt="신정환의 프로필 사진" 
        width={120} 
        height={120} 
        className={imageStyle}
      />
    </div>
  );
};

export default ProfileCard;
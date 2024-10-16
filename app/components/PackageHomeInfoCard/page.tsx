//PackageHomeInfoCard
import * as globalStyles from "../../style/global.css";
import * as styles from "./PackageHomeInfoCard.css";
import image1 from "../.././public/images/love119.png";
import Image from "next/image";
import star from "../.././public/images/star.svg"

const PackageHomeInfoCard = () => {
  return (
    <div className={styles.HomeInfoCard}>
      <div className={styles.CardImageContainer}>
        <Image
          className={styles.HomeInfoCardImage}
          src={image1}
          layout="fill"
          objectFit="cover"
          alt="패키지 썸네일"
        />
      </div>
      <div className={styles.InstructionTexts}>
        <div className={styles.UpperInstruction}>
          <div className={globalStyles.h5}>
            올 겨울, 마음을 따뜻하게 만들 삿포로
          </div>
          <div className={styles.Rating}>
            <Image src={star} alt="별점"/>
            <div className={globalStyles.p5}>4.5</div>
          </div>
        </div>

        <div className={globalStyles.p5} style={{color: globalStyles.vars.colors.gray[700]}}>10월 8일 ~ 10월 11일</div>
        <div className={globalStyles.label1} style={{color: globalStyles.vars.colors.gray[700]}} >250,000원 부터</div>
      </div>
    </div>
  );
};

export default PackageHomeInfoCard;

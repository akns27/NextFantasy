//PackageHomeInfoCard
import * as globalStyles from "../../style/global.css";
import * as styles from "./PackageHomeInfoCard.css";
import image1 from "../.././public/images/love119.png";
import Image from "next/image";
import star from "../.././public/images/star.svg";
import { vars } from "../../style/global.css";
import starIcon from "../../public/images/star.svg";

interface PackageInfo {
  image: string;
  name: string;
  rating: number;
  startDate: string;
  endDate: string;
  price: number;
}

const formatDate = (dateString: string):string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더한다.
  const day = date.getDate();
  return `${month.toString().padStart(2, "0")}월 ${day
    .toString()
    .padStart(2, "0")}일`;
};

const PackageHomeInfoCard = ({ packageInfo }: { packageInfo: PackageInfo }): JSX.Element => {
  const { image, name, rating, startDate, endDate, price } = packageInfo;

  return (
    <div className={styles.HomeInfoCard}>
      <div className={styles.CardImageContainer}>
        <Image
          className={styles.HomeInfoCardImage}
          src={image}
          layout="fill"
          objectFit="cover"
          alt="패키지 썸네일"
        />
      </div>
      <div className={styles.InstructionTexts}>
        <div className={styles.UpperInstruction}>
          <h5 className={globalStyles.h5}>{name}</h5>
          <div className={styles.Rating}>
            <Image src={starIcon} width={14} height={14} alt="별점" />
            <p className={globalStyles.p5}>{rating.toFixed(1)}</p>
          </div>
        </div>
        <p className={globalStyles.p5} style={{ color: vars.colors.gray[700] }}>
          {formatDate(startDate)} ~ {formatDate(endDate)}
        </p>
        <p className={globalStyles.label1} style={{ color: vars.colors.gray[700] }}>
          {price.toLocaleString()}원 부터
        </p>
      </div>
    </div>
  );
};

export default PackageHomeInfoCard;

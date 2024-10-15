import { testStyle } from "../style/layout.css";
import { label1, vars } from "../style/global.css";

export default function Home() {
  return (
    <div>
      <div className={testStyle}>
        <p className = {label1}>안녕하세요 이것은 테스트입니다</p>
        <p className = {label1}>안녕하세요 이것은 테스트2입니다</p>
      </div>
      <div style={{ width: "20px", height: "20px", color: vars.colors.gray[400] }}>테스트</div>

    </div>
  );
}

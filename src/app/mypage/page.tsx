import Link from "next/link";

import styles from "@/app/page.module.css";

const Mypage = () => {
  return (
    <div className={styles.page}>
      <h1>마이페이지</h1>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
      </ul>
    </div>
  );
};

export default Mypage;

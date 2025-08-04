import Link from "next/link";

import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>앱 라우터 테스트</h1>
      <ul>
        <li>
          <Link href="/login">로그인</Link>
        </li>
        <li>
          <Link href="/sign-up">회원가입</Link>
        </li>
        <li>
          <Link href="/mypage">마이페이지</Link>
        </li>
      </ul>
    </div>
  );
}

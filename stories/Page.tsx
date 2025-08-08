import React from 'react';
import { Header } from './Header';
import Chip from './../src/components/Chip/index';  // 실제 Chip 컴포넌트 위치로 바꿔줘
// import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      {/* <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      /> */}

      <section className="storybook-page">
        {/* 기존 컨텐츠 유지 */}

        {/* Chip 컴포넌트 예시 추가 */}
        <Chip category="recommend" prefix="숙소" />
        <Chip category="caution" prefix="호텔" />
        <Chip category="help" prefix="ATM" />
      </section>
    </article>
  );
};

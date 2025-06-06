import Routes from '@/routes/AppRouter';
import Style from '@/assets/styles/App.module.scss';

function App() {
  return (
    <div className={Style['app']}>
      {/*TODO: 헤더 컴포넌트 추가*/}
      <main>
        {/* 라우터에 의해 페이지가 랜더링 */}
        <Routes />
      </main>
    </div>
  );
}

export default App;

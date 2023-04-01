const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__slogan">
            <h1>
              Зарабатывайте больше <span>с WELBEX</span>
            </h1>
            <p>Развиваем и контролируем продажи за вас</p>
            <img className="main__red-light" src="img/red-light.png" alt="" />
          </div>
          <div className="main__advice">
            <h3 className="main__title">
              Вместе с <span>бесплатной </span>
              <span>консультацией </span>
              мы дарим:
            </h3>
            <div className="main__layout">
              <div className="main__widgets">
                <h3>Виджеты</h3>
                <p>30 готовых решений</p>
              </div>
              <div className="main__widgets">
                <h3>Dashboard</h3>
                <p>с показателями вашего бизнеса</p>
              </div>
              <div className="main__widgets">
                <h3>Skype Аудит</h3>
                <p>отдела продаж и CRM системы</p>
              </div>
              <div className="main__widgets">
                <h3>35 дней</h3>
                <p>использования CRM</p>
              </div>
            </div>
            <div className="main__layout-mobile">
              <div>
                <img
                  src="img/main-mobile-line.svg"
                  alt=""
                  className="main__line"
                />
                <span>Skype аудит</span>
              </div>
              <div>
                <img
                  src="img/main-mobile-line.svg"
                  alt=""
                  className="main__line"
                />
                <span>30 виджетов</span>
              </div>
              <div>
                <img
                  src="img/main-mobile-line.svg"
                  alt=""
                  className="main__line"
                />
                <span>Dashboard</span>
              </div>
              <div>
                <img
                  src="img/main-mobile-line.svg"
                  alt=""
                  className="main__line"
                />
                <span>Месяц аmoCRM</span>
              </div>
            </div>
            <button className="main__button">Получить консультацию</button>
            <img
              className="main__red-ball"
              src="img/red-ball-2.png"
              alt="red ball"
            />
          </div>
        </div>
        
      </div>
      
    </main>
  );
};

export default Main;

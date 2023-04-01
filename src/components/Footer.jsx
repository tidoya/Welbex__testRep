import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__company">
            <p className="footer__title">О компании</p>
            <div className="footer__company-items">
              <a href="/">Партнёрская программа</a>
              <a href="/">Вакансии</a>
            </div>
          </div>
          <div className="footer__menu">
            <p className="footer__title">Меню</p>
            <div className="footer__menu-wrapper">
              <div className="footer__menu-left">
                <a href="/">Расчёт стоимости</a>
                <a href="/">Услуги</a>
                <a href="/">Виджеты</a>
                <a href="/">Интеграции</a>
                <a href="/">Наши клиенты</a>
              </div>
              <div className="footer__menu-right">
                <a href="/"> Благодарность клиентов</a>
                <a href="/">Кейсы</a>
                <a href="/">Благодарственные письма</a>
                <a href="/">Сертификаты</a>
                <a href="/">Блог на Youtube</a>
                <a href="/">Вопрос / Ответ</a>
              </div>
            </div>
          </div>
          <div className="footer__contacts">
            <p className="footer__title">Контакты</p>
            <div className="footer__contacts-wrapper">
              <a className="footer__contacts-viber" href="tel:+75555555555">
                +7 555 555-55-55
              </a>
              <div className="footer__icons">
                <a href="/">
                  <img src="img/telegram-icon.svg" alt="Icon: Telegram" />
                </a>
                <a href="/">
                  <img src="img/viber-icon.svg" alt="Icon: Viber" />
                </a>
                <a href="/">
                  <img src="img/whatsapp-icon.svg" alt="Icon: WhatsApp" />
                </a>
              </div>
              <a href="http://maps.google.com/?q=Москва, Путевой проезд 3с1, к 902">
                Москва, Путевой проезд 3с1, к 902
              </a>
            </div>
          </div>
        </div>
        <p className="footer__regulations">
          ©WELBEX 2022. Все права защищены.
          <br />
          <a href="/">Политика конфиденциальности</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;

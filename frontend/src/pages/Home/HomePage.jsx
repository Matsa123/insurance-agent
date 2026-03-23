import { useEffect, useState } from 'react';
import api from '../../services/api';
import './HomePage.css';

function HomePage() {
    const [message, setMessage] = useState('Загрузка...');

    useEffect(() => {
        api.get('/test')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch(() => {
                setMessage('Ошибка подключения к Laravel API');
            });
    }, []);

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="home-hero__content page-section">
                    <div className="home-hero__left">
                        <p className="home-hero__label">Надежная страховая защита</p>
                        <h1 className="home-hero__title">
                            Страховой агент для семьи, бизнеса и личного имущества
                        </h1>
                        <p className="home-hero__text">
                            Помогаем подобрать оптимальные страховые решения, оформить заявку
                            и сопровождать клиента на всех этапах сотрудничества.
                        </p>

                        <div className="home-hero__actions">
                            <button className="primary-button">Оставить заявку</button>
                        </div>

                        <p className="home-hero__api-status">{message}</p>
                    </div>

                    <div className="home-hero__right">
                        <div className="home-hero__card">
                            <h3 className="home-hero__card-title">Почему выбирают нас</h3>
                            <ul className="home-hero__list">
                                <li>Индивидуальный подбор страховых программ</li>
                                <li>Консультация и сопровождение клиентов</li>
                                <li>Простая подача заявки онлайн</li>
                                <li>Подготовка проекта под личный кабинет и админку</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section">
                <h2 className="page-title">Наши основные направления</h2>
                <p className="page-text">
                    Автострахование, медицинское страхование, страхование жилья, бизнеса и
                    путешествий.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
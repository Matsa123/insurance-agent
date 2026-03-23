import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './HomePage.css';

function HomePage() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        api.get('/test')
            .then((response) => {
                setMessage(response.data.message);
            })
            .catch(() => {
                setMessage('Laravel API connection error');
            });
    }, []);

    return (
        <div className="home-page">
            <section className="home-hero">
                <div className="home-hero__content page-section">
                    <div className="home-hero__left">
                        <p className="home-hero__label">Trusted Insurance Protection</p>

                        <h1 className="home-hero__title">
                            Protect What Matters Most
                        </h1>

                        <p className="home-hero__text">
                            Trusted coverage for home, auto, health, and business.
                            Get personalized insurance solutions tailored to your needs.
                        </p>

                        <div className="home-hero__actions">
                            <Link to="/contact" className="primary-button">
                                Request a Quote
                            </Link>

                            <Link to="/contact" className="secondary-button">
                                Talk to an Agent
                            </Link>
                        </div>

                        <p className="home-hero__api-status">{message}</p>
                    </div>

                    <div className="home-hero__right">
                        <div className="home-hero__card">
                            <h3 className="home-hero__card-title">Why Choose Us</h3>

                            <ul className="home-hero__list">
                                <li>Personalized insurance plans</li>
                                <li>Fast and simple application process</li>
                                <li>Expert support at every step</li>
                                <li>Trusted by clients across the USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-services page-section">
                <div className="home-services__top">
                    <p className="home-services__label">Our Services</p>
                    <h2 className="page-title">Get Covered Today</h2>
                    <p className="page-text">
                        We provide flexible insurance options designed to protect your life,
                        family, and business.
                    </p>
                </div>

                <div className="home-services__grid">
                    <article className="service-card">
                        <h3 className="service-card__title">Auto Insurance</h3>
                        <p className="service-card__text">
                            Guidance in choosing the right vehicle coverage, policy options,
                            and support throughout the application process.
                        </p>
                    </article>

                    <article className="service-card">
                        <h3 className="service-card__title">Health Insurance</h3>
                        <p className="service-card__text">
                            Insurance plans for individuals, families, and employees with
                            flexible options based on your needs and budget.
                        </p>
                    </article>

                    <article className="service-card">
                        <h3 className="service-card__title">Home Insurance</h3>
                        <p className="service-card__text">
                            Coverage options for houses, apartments, and personal belongings
                            with protection against a wide range of risks.
                        </p>
                    </article>

                    <article className="service-card">
                        <h3 className="service-card__title">Business Insurance</h3>
                        <p className="service-card__text">
                            Protection for business property, liability, operations,
                            and other important commercial risks.
                        </p>
                    </article>

                    <article className="service-card">
                        <h3 className="service-card__title">Travel Insurance</h3>
                        <p className="service-card__text">
                            Travel protection plans for vacations, business trips,
                            and international travel with flexible coverage choices.
                        </p>
                    </article>

                    <article className="service-card">
                        <h3 className="service-card__title">Consultation & Support</h3>
                        <p className="service-card__text">
                            Clear insurance guidance in simple language to help you make
                            confident decisions and complete your request smoothly.
                        </p>
                    </article>
                </div>

                <div className="home-services__bottom">
                    <Link to="/contact" className="primary-button">
                        Get Covered Today
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
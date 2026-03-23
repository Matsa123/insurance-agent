import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ServicesPage from '../pages/Services/ServicesPage';
import ContactPage from '../pages/Contact/ContactPage';
import LoginPage from '../pages/Login/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'services',
                element: <ServicesPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
]);

export default router;
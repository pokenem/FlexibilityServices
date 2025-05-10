import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <header className="header">
            <div className="logo-section">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" className="logo"/>
                <div className="company-name">{t('companyName')}</div>
            </div>
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                {[
                    {to: '/', label: t('menu.home')},
                    {to: '/services', label: t('menu.services')},
                    {to: '/about-us', label: t('menu.about')},
                    {to: '/contact-us', label: t('menu.contact')},
                    {to: '/terms', label: t('menu.terms')},
                ].map(({to, label}) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({isActive}) =>
                            `nav-link${isActive ? ' active' : ''}`
                        }
                        end
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
            <button className="menu-toggle" onClick={toggleMenu}>
                <span className="hamburger"/>
            </button>
        </header>
    );
};

export default Header;
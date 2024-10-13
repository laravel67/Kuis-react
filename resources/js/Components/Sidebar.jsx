import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { BiGridAlt, BiLogoReact, BiMaleFemale } from 'react-icons/bi';

export default function Sidebar({ isVisible }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const isDashboardActive = route().current('dashboard');
    const isHomeActive = route().current('home');
    const isPesertaActive = route().current('peserta');
    const indexQuizActive = route().current('quizIndex');

    return (
        <aside
            id="layout-menu"
            className={`layout-menu menu-vertical menu bg-menu-theme ${isVisible ? 'd-block' : 'd-none'}`}
        >
            <div className="app-brand demo">
                <Link href="/" className='app-brand-link'>
                    <span className="app-brand-logo demo">
                        <BiLogoReact />
                    </span>
                    <span className="app-brand-text demo text-uppercase fw-bolder ms-2">CBT</span>
                </Link>
                <button 
                    type="button" 
                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                >
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </button>
            </div>
            <div className="menu-inner-shadow"></div>
            <ul className="menu-inner py-1">
                <li className={`menu-item ${isHomeActive ? 'active' : ''}`}>
                    <Link href={route('home')} className="menu-link">
                        <BiGridAlt className="menu-icon tf-icons" />
                        <div>Home</div>
                    </Link>
                </li>
                <li className={`menu-item ${isDashboardActive ? 'active' : ''}`}>
                    <Link href={route('dashboard')} className="menu-link">
                        <BiGridAlt className="menu-icon tf-icons" />
                        <div>Dashboard</div>
                    </Link>
                </li>
                <li className={`menu-item ${isPesertaActive ? 'active' : ''}`}>
                    <Link href={route('dashboard')} className="menu-link">
                        <BiMaleFemale className="menu-icon tf-icons" />
                        <div>Peserta</div>
                    </Link>
                </li>
                <li className={`menu-item ${indexQuizActive ? 'active' : ''}`}>
                    <Link href={route('quizIndex')} className="menu-link">
                        <BiMaleFemale className="menu-icon tf-icons" />
                        <div>Kelola Soal</div>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

import { useState } from 'react';
import Sidebar from '@/Components/Sidebar';
import Navbar from '@/Components/Navbar';

export default function Main({ user, header, children }) {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };

    return (
        <div className='layout-wrapper layout-content-navbar'>
            <div className='layout-container'>
                <Sidebar isVisible={isSidebarVisible} />
                <div className='layout-page'>
                    <Navbar onToggleSidebar={toggleSidebar} />
                    {children}
                </div>
            </div>
        </div>
    );
}

import React from 'react';

import './styles/Sidebar.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <ul style={{ padding: 0 }}>
                    <li className="sidebar-item">React</li>
                    <li className="sidebar-item">Apollo Client</li>
                    <li className="sidebar-item">Next.js</li>
                </ul>
            </div>
        )
    }
};

export default Sidebar;
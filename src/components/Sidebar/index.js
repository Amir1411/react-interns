import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="sidebar">
                <ul>
                    <li><a><i className="fas fa-home"></i>Components</a></li>
                    <li><a><i className="fas fa-trash"></i>UI Elements</a></li>
                    <li><a><i className="fas fa-shopping-cart"></i>Cards</a></li>
                    <li><a><i className="fas fa-chart-bar"></i>Charts</a></li>
                    <li><a><i className="fas fa-users"></i>Authentication</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

//  Creating Component as functional;
import React from "react";
import './menu-item.styles.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigate(`${location.pathname}${linkUrl}`);
    };

    return (
        <div className={`${size} menu-item`} onClick={handleClick}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;

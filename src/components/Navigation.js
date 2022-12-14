import React from 'react';
import {NavLink} from "react-router-dom"

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact ="true" to ="/" className={({isActive}) => (isActive ? "active" : 'none')}>
                Accueil
            </NavLink>
            <NavLink exact ="true" to ="/a-propos" className={({isActive}) => (isActive ? "active" : 'none')}>
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;
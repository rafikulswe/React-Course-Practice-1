import React from 'react';
import ProfileCss from '../../assets/sass/profile.module.scss';

const Header = (props) => {
    return ( 
        <div className={ProfileCss.profileHeader}>
            <h3>{props.name}</h3>
            <p>{props.designation}</p>
        </div>
     );
}
 
export default Header;
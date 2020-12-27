import React from 'react';
import ProfileCss from '../../assets/sass/profile.module.scss';

const Footer = (props) => {
    return ( 
        <div className={ProfileCss.profileFooter}>
            <ul>
                {
                    props.footLink.map((link, key)=> {
                        return (
                            <li key={key}><a href="#">{link}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default Footer;
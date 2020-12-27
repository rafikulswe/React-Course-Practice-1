import React, { Component } from 'react';
import ProfileCss from '../../assets/sass/profile.module.scss';
import Header from './header';
import Footer from './footer';

class Profile extends Component {
    state = { 
        footerLink: [ 'Facebook', 'LinkedIn', 'Github'],
        skills: ['PHP', 'Laravel', 'Javascript', 'React js']
     }
    render() { 
        return ( 
            <div className={ProfileCss.container}>
                <Header name="Rafikul Islam Rafi" designation="Software Engineer"/>
                <div className={ProfileCss.profileBody}>
                    <h3>Skills: </h3>
                    {
                        this.state.skills.map((skill, key)=>{
                           return ( <div className={ProfileCss.expItem} key={key}>{skill}</div> )
                        })
                    }
                </div>
                <Footer footLink={this.state.footerLink} />
            </div>
        );
    }
}
 
export default Profile;
import React from 'react';
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import './App.css';

export default function Contact() {

    return (
        <>
            <div className='contactSectionContent'>
                <div className='contactTitle'>
                    <h1>Contact</h1>
                </div>
                <div className='contactMethods'>
                    <div className='contactCard'>
                        <a href='mailto:email@test.com'> <AiOutlineMail style={{color: '#f8f6f6', padding: '1%'}} size={50} /></a>
                    </div>
                    <div className='contactCard'>
                        <a href='https://linkedin.com/mattcopeland27'><AiOutlineLinkedin style={{color: '#f8f6f6', padding: '1%'}} size={50} /></a>
                    </div>
                    <div className='contactCard'>
                        <a href='https://github.com/mattc-27'> <AiOutlineGithub style={{color: '#f8f6f6', padding: '1%'}} size={50}/></a>
                    </div>
                </div>
            </div>
        </>
    );
}
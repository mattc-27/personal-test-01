import React from 'react';
import { DiNodejsSmall, DiReact, DiPython, DiPostgresql } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import '../App.css';

export default function Experience() {

    return (
        <>
            <div className='sectionContent' id='backgroundskills'>
                <div className='sectionTitle'>
                    <h1>Background</h1>
                </div>
                <div className='sectionUl'>
                    <ul>
                        <li>Over seven years of combined experience in SaaS, including three years as a Technical Support Engineer in Payments and Financial Technology.</li>
                    </ul>
                </div>
            </div>
            <div className='sectionContent'>
                <div className='sectionTitle'>
                    <h1>Skills</h1>
                </div>
                <div className='sectionUl'>
                    <ul>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>ReactJs</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>REST APIs</li>
                    </ul>
                    <ul>
                        <li>Payment Gateways: Stripe, Paypal, Braintree</li>
                        <li>Avalara, Sendgrid</li>
                        <li>Google Cloud</li>
                        <li>Postman</li>
                    </ul>
                </div>
                <div className='skillsIcons'>
                    <DiNodejsSmall size={50} />
                    <SiExpress size={50} />
                    <DiReact size={50} />
                    <DiPostgresql size={50} />
                    <DiPython size={50} />
                </div>
            </div>
        </>
    );
}
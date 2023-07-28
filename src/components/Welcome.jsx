import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Welcome() {


    return (
        <>
            <div className='welcomeContent'>
                <div className='welcomeTitle'>
                    <h1>Hi, I'm Matt</h1>
                </div>
                <div className='welcomeText'>
                    <p>Welcome to my personal website and pardon the dust - this is a work in progress. I'm a self-taught developer and experienced IT professional who has spent over seven years working in the startup environment.</p>
                    <p>Alongside my passion for technology, I have diverse interests that range from baking and playing the piano and guitar to embarking on road trips and capturing moments through photography. I also love delving into a wide array of subjects online and through books to expand my knowledge.</p> 
                    <p>Explore my website to learn more about my journey and the projects I have worked on.</p>
                </div>
            </div>
        </>
    );
}
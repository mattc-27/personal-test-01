import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Layout() {


    return (
        <>
            <header className='headerContainer'>
                <div className='mainTitle'>
                <h1>Matthew Copeland</h1>
                </div>
                <div className='navBar'>
                    <ul>
                        <li><a href='#Experience'>Experience</a></li>
                        <li><a href='#Projects'>Projects</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </div>
            </header>
            <Outlet />
        </>
    );
}
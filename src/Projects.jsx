import React from 'react';
import ProjectList from './ProjectList';
import { ProjectCard } from './ProjectCard';
import './App.css';

export default function Projects() {

    const portfolioList = ProjectList.map((item) => (
        <ProjectCard
            key={item.id}
            project={item}
        />
    ))

    return (
        <>
            <div className='sectionContent'>
                <div className='sectionTitle'>
                    <h1>Projects</h1>
                </div>
                <div className='portfolioList'>
                {portfolioList}
                    </div>
            </div>
        </>
    );
}
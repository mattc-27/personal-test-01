import React  from 'react';
import '../App.css';

export function ProjectCard({ project }) {

    return (
        <div className='projectCard'>
            <div className='projectTitle'>
                <h1>{project.name}</h1>
            </div>
            <div className='projectDescription'>
                <p>{project.description}</p>
            </div>
            <div className='projectUrls'>
                {project.url ?
                    <div className='projectDescriptionUrl'>
                        <a href={project.url} >Github</a>
                    </div>
                    : null
                }
                {project.liveUrl ?
                    <div className='projectDescriptionUrl'>
                        <a href={project.liveUrl}>View</a>
                    </div>
                    : null
                }
            </div>
        </div>
    );
}
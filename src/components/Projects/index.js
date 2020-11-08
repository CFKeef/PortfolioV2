import React from 'react';

import SectionHeader from '../../assets/images/Section2.svg';
import ToyMonImage from '../../assets/images/STORE.svg';
import ExpensieImage from '../../assets/images/expensie.svg';
import PanDashImage from '../../assets/images/prodoProj.svg';

const Projects = () => {
    const projectsList = [
        {name: "ToyMon", techUsed: "React, Express, Electron", image: ToyMonImage, gitlink: null, live: null, description: "SAAS solution to improve the buying process for consumers purchasing highly sought after products"},
        {name: "Expensie", techUsed: "React, Express, Electron, MongoDB", image: ExpensieImage, gitlink: "https://github.com/CFKeef/expensie", live: "https://github.com/CFKeef/expensie", description: "CRUD application that assists in the tracking of sales and expenses, improving user experience for reselling items online"},
        {name: "PandemicDashboard", techUsed: "React, Express, Recharts", image: PanDashImage, gitlink: "https://github.com/CFKeef/PandemicDashboard", live: "https://github.com/CFKeef/PandemicDashboard", description: "REST API built to visualize pandemic data for the country the user chooses"},
    ]

    const generateProjectCards = () => {
        return (
                <ul>
                    {projectsList.map((project, index) => {
                        return (
                            <li key={"project" + index}>
                                <div className={"Card Numb" + index}>
                                    <div className="proj-img">
                                        <img src={project.image} alt={project.name + " Logo"}></img>
                                    </div>
                                    <div className="proj-text">
                                        <h2>{project.name}</h2>
                                        <p className={'text-desc'}>{project.description}</p>
                                        <h2>Tech</h2>
                                        <p className='tech-p'>{project.techUsed}</p>
                                    </div>
                                    <div className='btns'>
                                        <div className='link-container'>
                                            <a className={'Github' + index + ' btnactive'} href={project.git}>Github</a>
                                        </div>
                                        <div className='link-container'>
                                            <a className={'Live' + index + ' btnactive'} href={project.live}>Visit</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        )
    }

    return (
        <section className="projects">
            <img className="header" src={SectionHeader} />
            {generateProjectCards()}
        </section>
    )
}

export default Projects;
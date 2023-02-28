import React from 'react';
import { Outlet } from 'react-router-dom';
import Projects from '../Home/Projects/Projects';

const ProjectMain = () => {
    return (
        <div>
            <Projects></Projects>
            <Outlet></Outlet>
        </div>
    );
};

export default ProjectMain;

import { useState, useEffect } from "react";
// import './HomePage.css';

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
    // State
    const [projectList, setProjectList] = useState([]);
    const [pledgeList, setPledgeList] = useState([]);

    // Project Data
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
    }, []);

// Pledge Data
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}pledges`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setPledgeList(data);
        });
    }, []);

    return (
        <div id="project-list" className="page-container">
            <h1>Istudy</h1>
            <p> Supporting students all over the world </p>
            {projectList.map((project, key) => {
                return <ProjectCard key={key} projectData={project} />;
            })}
        </div>
    );
}
export default HomePage;
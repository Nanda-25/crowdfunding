import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProjectPage.css';

function ProjectPage() {
    //State
const [projectData, setProjectData] = useState({pledges: []})
//Hooks

const { id }  = useParams();

//Effects
useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProject(data);
        });
}, []);

    return (
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;
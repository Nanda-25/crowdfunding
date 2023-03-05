import { useState, useEffect } from "react";

import PledgeForm from "../components/PledgeForm/PledgeForm";

function PledgePage() {

    //State
    const [setPledgeList] = useState([]);

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
        <div className="page-container">
            <h2>Donate today!</h2>
            <PledgeForm />
            <p>test comment</p>
        </div>
    )
}

export default PledgePage;
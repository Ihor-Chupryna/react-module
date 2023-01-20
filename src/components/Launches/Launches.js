import { useEffect, useState } from "react";

import './LaunchesStyle.css';
import { Launch } from "../Launch/Launch";
import { launchService } from "../../services";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.allLaunches().then(value => value.data).then(value => setLaunches([...value]))
    }, [])

    return (
        <div className={'launches-list'}>
            {launches
                .filter(value => value.launch_year !== '2020')
                .map(value => <Launch key={value.flight_number} launch={value}/>)}
        </div>
    );
};

export { Launches };
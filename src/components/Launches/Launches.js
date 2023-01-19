import {useEffect, useState} from "react";

import './LaunchesStyle.css';
import {Launch} from "../Launch/Launch";
import {launchService} from "../../services";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.allLaunches().then(value => value.data).then(value => setLaunches(value.filter(value => value.launch_year !== '2020')))
    }, [])

    return (
        <div className={'launches-list'}>
            {launches.map(value => <Launch key={value.flight_number} launch={value}/>)}
        </div>
    );
};

export {Launches};
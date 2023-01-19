import './LaunchStyle.css';

const Launch = ({launch}) => {
    return (
        <div className={'launch-wrapper'}>
            <h2>{launch.mission_name}</h2>
            <h3>launch year: {launch.launch_year}</h3>
            <img src={launch.links.mission_patch_small} alt="photo"/>
        </div>
    );
};

export {Launch};
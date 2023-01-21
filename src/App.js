import { Users } from "./components/Users";
import { getUsers } from "./api/getUsers";
import { useEffect, useState } from "react";
import { UserDetails } from "./components/UserDetails";

import './app.css';

const App = () => {
    const [users, serUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUsers().then(value => serUsers(value))
    }, [])

    return (
        <div className={'App'}>
            <div className={'info-block'}>
                {/*{!!users.length && <Users users={users} onSelectUser={(id) => setUserId(id)}/>}*/}
                {!!users.length && <Users users={users} onSelectUser={setUserId}/>}
            </div>
            <div className={'divider'}></div>
            <div className={'info-block'}>
                {!!userId && <UserDetails onRemoveUserDetails={setUserId} userId={userId}/>}
            </div>
        </div>
    );
};

export { App };
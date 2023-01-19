import {useEffect, useState} from "react";

import {User} from "../User/User";
import {userService} from "../../services";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, []);


    return (
        <div>
            {users.map(value => <User key={value.id} user={value} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};
import { getUser } from "../api/getUsers";
import { useEffect, useState } from "react";

const UserDetails = ({ userId, onRemoveUserDetails }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (userId) {
            getUser(userId).then(value => setUser(value))
        }
    }, [userId])
    if (!user) return null
    return (
        <div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <button onClick={() => onRemoveUserDetails(null)}>Clean up user details</button>
        </div>
    );
};

export { UserDetails };

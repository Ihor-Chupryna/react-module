import { useEffect, useState } from "react";

import { Album } from "../Album/Album";

import { albumService } from "../../services";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getAll().then(({ data }) => setAlbums([...data]))
    }, [])
    return (
        <div>
            {albums.map(value => <Album key={value.id} album={value}/>)}
        </div>

    );
};

export { Albums };
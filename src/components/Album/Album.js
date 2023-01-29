import style from './Album.module.css';

const Album = ({ album }) => {
    const { userId, id, title } = album;

    return (
        <div className={style.album}>
            <div>ID:{id}</div>
            <div>UserID:{userId}</div>
            <div>Title:{title}</div>
        </div>
    );
};

export { Album };
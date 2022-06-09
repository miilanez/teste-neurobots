const CardUser =({info}) => {
    return (
        <div className="container-card">
            <h3>{info.name}</h3>
            <h3>{info.login}</h3>
            <h3>{info.avatar_url}</h3>
            <h3>{info.bio}</h3>
            <h3>{info.url}</h3>
        </div>
    );
}

export default CardUser
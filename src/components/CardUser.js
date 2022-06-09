const CardUser = ({ info }) => {
    return (
        <div className="container-principal">
            <div className="container-card">
                <div className="card">
                    <div className="profile-user-img">
                        <img src={'' + info.avatar_url} />
                    </div>
                    <div className="profile-user-bio">
                        <h4>{info.login}</h4>
                        <h3>{info.name}</h3>
                        <p>{info.bio}</p>
                    </div>
                    <div className="profile-user-settings">
                        <a className="button-visitar" href={info.html_url} > Visitar Perfil </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardUser
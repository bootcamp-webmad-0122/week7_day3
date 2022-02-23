import { Navigate } from 'react-router-dom'

function ProfilePage({ loggedUser }) {

    if (!loggedUser) {
        return <Navigate to="/error" />
    }

    return (
        <div>
            <h1>El perfil de {loggedUser?.userName}</h1>
            <p>Estás aquí porque estás loguead@, {loggedUser?.userName}</p>
        </div>
    );
}

export default ProfilePage;
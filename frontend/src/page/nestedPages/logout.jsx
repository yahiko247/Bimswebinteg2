
import { GoogleLogout } from 'react-google-login';

const clientId = "1048129708172-6qb3rtjtdpin8l8ftr7ihj51hvl80dps.apps.googleusercontent.com";

const onSuccess = () => {
    console.log("Logout successful");
}

function Logout() {
    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    );
}

export default Logout;

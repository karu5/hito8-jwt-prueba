import { useContext, useEffect } from 'react';
import { UserContext } from '../components/context/UserContext';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const { getUser, user} = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
      navigate("/")
      getUser ({ username: "", password: "", token: false })
  }
  
    useEffect(() => {
      getUser();
    }, []);
  
    return (
      <div>
        <div>
          {user ? (
            <>
            <p>Email: {user.email}</p>

            </>
  
          ) : (
            <p>Registrarse para ver su perfil.</p>
          )}
        </div>
        <div className="buttons">
          <button onClick={() => (logout())} className="btn btn-primary px-4">Logout</button>
        </div>
      </div>
    );
  };
  export default Profile;
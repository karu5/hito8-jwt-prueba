import React, { useContext, useState } from 'react';
import { UserContext } from '../components/context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(UserContext); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const emailValue = email;
    const passwordValue = password;

    const handleSubmit = (e) => {
        e.preventDefault(); 
        login(emailValue, passwordValue);
    }
    
    return (
      <>
        <h2 className="mb-3 text-center">Login</h2>
        <div className='container-fluid'>
          <div className='container p-5'>
            <form className="formulario m-5" onSubmit={handleSubmit}>
            {error && <p className="text-danger">{error}</p>}

              <div className="form-group m-4">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  />
              </div>

                <div className="form-group m-4">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      />
                </div>
                  <div className='text-center'>
                    <button type="submit" className="btn btn-primary mt-4">
                      Login
                    </button>
                  </div>
            </form>
          </div>
        </div>
      </>
  );
};

export default Login;
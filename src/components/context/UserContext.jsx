import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

    export const UserProvider = ({ children }) => {
        const [user, setUser] = useState(null);
        const [token, setToken] = useState(null);
        const navigate = useNavigate();
        

useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      getUser(savedToken); 
    }
  }, []);

    const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const getUser = async () => {
    if (token) {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
    }
  };
   
    // Registro
    const register = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();

            if (!response.ok) throw new Error(data?.error || "Error en el registro");
            
            // Alerta por registro
            alert("Registration successful!");

            
            localStorage.setItem("token", data.token);
            setToken(data.token);
            await getUser(); 
            navigate("/"); 
        } catch (error) {
            alert(error.message);
        }
    };

    
    const login = async (emailValue, passwordValue) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: emailValue, password: passwordValue }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data?.error || "Error en la autenticación");
            alert("Authentication successful!");
            localStorage.setItem("token", data.token);
            setToken(data.token);
            await getUser(); 
            navigate("/");
        } catch (error) {
            alert(error.message);
        }
    };

    

    return (
        <UserContext.Provider value={{ user, token, logOut, login, register, getUser }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;
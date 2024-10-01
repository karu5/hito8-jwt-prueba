import { createContext, useState, useEffect } from "react";


//Se crea context
export const ApiContext = createContext();

export const ApiProvider = ({children}) => {
    const [pizza, setPizza] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

//Url de la API    
    const urlBase = "http://localhost:5000/api/pizzas";
    const getPizzas = async () => {
        setIsLoading(true);
        try {
        const response = await fetch(urlBase);
        const pizzas = await response.json();
        setPizza(pizzas);
        } catch (error) {
        console.error(error);
        } finally {
        setIsLoading(false);
        }
    };
    
    useEffect(() => {
    getPizzas();
    }, []);


 
    return (
    <DataPizzaContext.Provider value = {{pizza, getPizzas, isLoading }}>
        {children}
    </DataPizzaContext.Provider>
    );

};
export default ApiContext;
import React, {useState, createContext} from 'react';

export const quantitiesContext = createContext();

export const QuantitiesProvider = (props) => {

    const [Quantities, setQuantities] = useState({
        Bread: {quantities: "0"},
        Milk: {quantities: "0"},
        Cheese: {quantities: "0"},
        Soup: {quantities: "0"},
        Butter: {quantities: "0"},
    });

    return (
        <quantitiesContext.Provider value={[Quantities, setQuantities]}>
            {props.children}
        </quantitiesContext.Provider>
    )
};
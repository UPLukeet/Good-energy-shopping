import React, {useState, createContext} from 'react';

export const quantitiesContext = createContext();

export const QuantitiesProvider = (props) => {

    const [Quantities, setQuantities] = useState({});

    return (
        <quantitiesContext.Provider value={[Quantities, setQuantities]}>
            {props.children}
        </quantitiesContext.Provider>
    )
};
import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantsTransform, restaurantsRequest } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setLoading(true);

        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((result) => {
                    setLoading(false);
                    setRestaurants(result);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};

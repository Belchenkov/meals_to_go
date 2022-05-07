import React, { useState, createContext, useEffect, useContext } from 'react';

import {
    restaurantsTransform,
    restaurantsRequest,
} from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        setLoading(true);
        setRestaurants([]);

        setTimeout(() => {
            restaurantsRequest(loc)
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
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);

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

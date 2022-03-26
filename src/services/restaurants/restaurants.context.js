import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantsTransform, restaurantsRequest } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: [1, 2, 3, 4, 5],
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};

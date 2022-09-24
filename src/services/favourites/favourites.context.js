import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../auth/auth.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [favourites, setFavourites] = useState([]);

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (err) {
            console.error('error storing: ', err);
        }
    };

    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);

            if (value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch (err) {
            console.error('error loading: ', err);
        }
    };

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );
        setFavourites(newFavourites);
    };

    useEffect(() => {
        if (user) {
            loadFavourites(user.uid);
        }
    }, [user]);

    useEffect(() => {
        saveFavourites(favourites, user.uid);
    }, [favourites, user]);

    return (
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
};

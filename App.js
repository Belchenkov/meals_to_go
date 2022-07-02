import React, { useEffect, useState } from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import * as firebase from 'firebase';
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import Navigation from './src/infrastructure/navigation';

const firebaseConfig = {
    apiKey: 'AIzaSyCnAeo3Wd1OCIZ64SEf-tvjhBxulHJwzWU',
    authDomain: 'mealstogo-2e427.firebaseapp.com',
    projectId: 'mealstogo-2e427',
    storageBucket: 'mealstogo-2e427.appspot.com',
    messagingSenderId: '982852923117',
    appId: '1:982852923117:web:d10531dd77b4b1d8daa6e4',
};

firebase.initializeApp(firebaseConfig);

export default function App() {
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}

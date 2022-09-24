import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';

import { loginRequest, registerRequest } from './auth.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    firebase.auth().onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
            setUser(firebaseUser);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    });

    const onLogin = (email, password) => {
        setIsLoading(true);

        loginRequest(email, password)
            .then((res) => {
                setUser(res);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.toString());
            });
    };

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);

        if (password !== repeatedPassword) {
            setError('Error: Password do not match');
        }

        setIsLoading(true);
        registerRequest(email, password)
            .then((res) => {
                setUser(res);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.toString());
            });
    };

    const onLogout = () => {
        setUser(null);
        firebase.auth().signOut();
    };

    return (
        <AuthContext.Provider
            value={{
                isAuth: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

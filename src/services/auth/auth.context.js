import React, { useState, createContext } from 'react';
import * as firebase from 'firebase';
import { loginRequest } from './auth.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setLoading(true);
        loginRequest(email, password)
            .then((res) => {
                setUser(res);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
import React, { useState, useContext } from 'react';

import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthContext } from '../../../services/auth/auth.context';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin } = useContext(AuthContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        secure
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthButton
                        icon="lock-open-outline"
                        color="teal"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >
                        Login
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};

export default LoginScreen;

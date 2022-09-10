import React, { useState, useContext } from 'react';

import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    ErrorContainer,
    Title,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthContext } from '../../../services/auth/auth.context';
import { Text } from '../../../components/typography/text.component';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { onLogin, error } = useContext(AuthContext);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
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
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
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
            <Spacer size="large">
                <AuthButton
                    mode="contained-tonal"
                    color="olive"
                    onPress={() => navigation.goBack()}
                >
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};

export default LoginScreen;

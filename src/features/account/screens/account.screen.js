import React from 'react';

import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="login"
                    mode="contained"
                    color="teal"
                    onPress={() => navigation.navigate('Login')}
                >
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton
                        icon="shield-account"
                        mode="contained"
                        color="maroon"
                        onPress={() => navigation.navigate('Register')}
                    >
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};

export default AccountScreen;
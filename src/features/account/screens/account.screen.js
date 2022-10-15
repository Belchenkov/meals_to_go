import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    Title,
    AnimationWrapper,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <AnimatedLottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require('../../../../assets/watermelon.json')}
                />
            </AnimationWrapper>
            <Title>Meals To Go</Title>
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
